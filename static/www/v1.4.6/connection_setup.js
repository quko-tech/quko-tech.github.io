// --- Access-point disconnect watcher --------------------------------------
// When the device joins the user's WiFi it shuts down its own access point
// ("Quko Kosoku"), so this computer silently drops off that network. We poll
// the device origin after Connect; once it becomes unreachable we let the user
// know they've left the Quko Kosoku network.
let apWatchInterval = null;
let apWatchFailures = 0;
let sawOffline = false;
let disconnectNotified = false;

function startApWatch() {
    if (apWatchInterval !== null || disconnectNotified) return;

    // Network state events give us a faster, corroborating signal.
    window.addEventListener('offline', onNetworkOffline);
    window.addEventListener('online', onNetworkOnline);

    // Give the device a moment to handle the connect request before polling.
    setTimeout(() => {
        if (disconnectNotified) return;
        apWatchInterval = setInterval(pollAccessPoint, 2000);
    }, 1500);
}

function stopApWatch() {
    if (apWatchInterval !== null) {
        clearInterval(apWatchInterval);
        apWatchInterval = null;
    }
    window.removeEventListener('offline', onNetworkOffline);
    window.removeEventListener('online', onNetworkOnline);
}

function onNetworkOffline() {
    // Losing the interface is the first sign the access point went away.
    sawOffline = true;
}

function onNetworkOnline() {
    // Coming back online after going offline means we hopped to another network.
    if (sawOffline) notifyDisconnected();
}

function pollAccessPoint() {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    fetch(location.origin + '/?ping=' + Date.now(), {
        cache: 'no-store',
        signal: controller.signal
    })
    .then(() => {
        clearTimeout(timeout);
        apWatchFailures = 0; // Still reachable.
    })
    .catch(() => {
        clearTimeout(timeout);
        apWatchFailures++;
        // Two consecutive failures => the Quko Kosoku access point is gone.
        if (apWatchFailures >= 2) notifyDisconnected();
    });
}

function notifyDisconnected() {
    if (disconnectNotified) return;
    disconnectNotified = true;
    stopApWatch();
    showDisconnectToast();
}

function showDisconnectToast() {
    if (document.getElementById('disconnectToast')) return;

    const toast = document.createElement('div');
    toast.id = 'disconnectToast';
    toast.className = 'disconnect-toast';
    toast.setAttribute('role', 'alert');
    toast.innerHTML =
        "<span class='toast-icon'>&#x1F4F6;</span>" +
        "<div class='toast-body'>" +
            "<span class='toast-title'>Disconnected from Quko Kosoku</span>" +
            "Your computer has left the <strong>Quko Kosoku</strong> network and is now on a different WiFi." +
        "</div>" +
        "<button type='button' class='toast-close' aria-label='Dismiss'>&times;</button>";

    document.body.appendChild(toast);
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 350);
    });

    // Trigger the slide-in transition on the next frame.
    requestAnimationFrame(() => toast.classList.add('show'));
}

// --- Device hostname -------------------------------------------------------
// While in connection setup mode the device serves its hostname at
// /api/hostname. We fetch it up front (while still on the device's access
// point) so that, once it has joined the user's WiFi, we can redirect to
// http://<hostname>.local.
let deviceHostname = null;

function fetchHostname() {
    fetch('/api/hostname', { cache: 'no-store' })
        .then(response => response.ok ? response.json() : null)
        .then(result => {
            if (result && result.hostname) deviceHostname = result.hostname;
        })
        .catch(() => { /* device unreachable; redirect is simply skipped */ });
}
fetchHostname();

// --- WiFi connection -------------------------------------------------------
function connectWifi() {
    const ssid = document.getElementById('wifi_ssid').value.trim();
    const password = document.getElementById('wifi_password').value.trim();

    if (ssid === '') {
        showMessage('Please enter a WiFi SSID', false);
        return;
    }

    // Show loading overlay
    document.getElementById('loadingOverlay').style.display = 'block';
    document.getElementById('connectButton').disabled = true;

    // Start watching for this computer dropping off the device's access point.
    startApWatch();

    // Send only the SSID and password to the ESP32
    fetch('/api/wifi-connect', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'ssid=' + encodeURIComponent(ssid) + '&password=' + encodeURIComponent(password)
    })
    .then(response => {
    if (!response.ok) {
        throw new Error('Failed to connect to WiFi network');
    }
    return response.json();
    })
    .then(result => {
    // Hide loading overlay
    document.getElementById('loadingOverlay').style.display = 'none';
    document.getElementById('connectButton').disabled = false;

    // Prefer the hostname fetched from /api/hostname; fall back to the connect response
    const hostname = deviceHostname || result.hostname;
    showMessage("Success!\n\nThe device will now reboot.", true, hostname);
    })
    .catch(error => {
    // Hide loading overlay
    document.getElementById('loadingOverlay').style.display = 'none';
    document.getElementById('connectButton').disabled = false;

    if (error.message === 'Failed to fetch') {
        // Network dropped — device likely shut down its AP after connecting successfully
        showMessage("The Kosoku appears to have connected successfully!\n\nPlease reconnect to your WiFi network and access the device.", true);
    } else {
        showMessage(error.message, false);
    }
    });
}
