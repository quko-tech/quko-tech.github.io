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
    
    // Extract hostname and display success message
    const hostname = result.hostname;
    showMessage("Success!\n\n&#x26A0;&#xFE0F; Please turn your device upside down NOW &#x26A0;&#xFE0F;\n\n", true, hostname);
    })
    .catch(error => {
    // Hide loading overlay
    document.getElementById('loadingOverlay').style.display = 'none';
    document.getElementById('connectButton').disabled = false;
    showMessage(error.message, false);
    });
}