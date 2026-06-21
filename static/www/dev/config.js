let configData = {};
const configForm=document.getElementById('configForm');
const configRaw=document.getElementById('configRaw');
const toggleLink=document.getElementById('toggleView');
let showingRaw=false;

// Toggle text input fields based on switch state
function toggleTextInput(fieldId, enabled) {
    const field = document.getElementById(fieldId);
    field.disabled = !enabled;
    if (!enabled) field.value = '';
    const scanBtn = document.getElementById(fieldId + '_scan');
    if (scanBtn) scanBtn.disabled = !enabled;
}

toggleLink.addEventListener('click',function(){
    if(showingRaw){
        configForm.style.display='block';
        configRaw.style.display='none';
        toggleLink.textContent='Show Raw Config';
    }else{
        configForm.style.display='none';
        configRaw.style.display='block';
        toggleLink.textContent='Show Form Config';
        updateRawConfigFromForm();
    }
    showingRaw=!showingRaw;
});

function loadConfig(){
    fetch('/api/config')
    .then(response=>{
        if(!response.ok){
            throw new Error('Failed to load configuration');
        }
        return response.json();
    })
    .then(data=>{
        configData = data;
        document.getElementById('configEditor').value=JSON.stringify(data, null, 2);
        updateFormFields();
    })
    .catch(error=>{
        showMessage(error.message,false);
    });
}

function updateFormFields(){
    // Security settings
    document.getElementById('device_username').value=configData.deviceUsername||'';
    document.getElementById('device_password').value=configData.devicePassword||'';
    
    // WiFi settings
    document.getElementById('settingsSSID').value=configData.settingsSSID||'';
    document.getElementById('settingsPass').value=configData.settingsPass||'';

    // Cloud account
    document.getElementById('cloudToken').value=configData.cloudToken||'';
    
    // Telemetry station
    document.getElementById('routerSN').value = (configData.routerSN === '0000') ? '' : (configData.routerSN || '');

    // Data usage
    document.getElementById('enable_logging').checked=configData.enableLogging||false;
    document.getElementById('enable_streaming').checked=configData.enableStreaming||false;

    // Vessel configuration
    document.getElementById('vesselType').value = configData.vesselType || '';
    document.getElementById('numAthletes').value = configData.numAthletes || '';
    document.getElementById('gender').value = configData.gender || '';
    
    // Heart rate monitors
    for(let i = 0; i < 4; i++){
        const hrmEnabled = configData.hrm && configData.hrm[i] ? configData.hrm[i].enable : false;
        document.getElementById(`enable_hrm${i+1}`).checked = hrmEnabled;
        document.getElementById(`hrm${i+1}_name`).disabled = !hrmEnabled;
        document.getElementById(`hrm${i+1}_name`).value = configData.hrm && configData.hrm[i] ? configData.hrm[i].name : '';
        document.getElementById(`hrm${i+1}_name_scan`).disabled = !hrmEnabled;
    }
    
    // Paddle Sensors
    for(let i = 0; i < 4; i++){
        const dinamoEnabled = configData.dinamo && configData.dinamo[i] ? configData.dinamo[i].enable : false;
        document.getElementById(`enable_dinamo${i+1}`).checked = dinamoEnabled;
        document.getElementById(`dinamo${i+1}_name`).disabled = !dinamoEnabled;
        document.getElementById(`dinamo${i+1}_name`).value = configData.dinamo && configData.dinamo[i] ? configData.dinamo[i].name : '';
    }

    // External button
    const extButtonEnabled = configData.enableStartTrans||false;
    document.getElementById('enable_start_trans').checked = extButtonEnabled;
    document.getElementById('start_trans_name').disabled = !extButtonEnabled;
    document.getElementById('start_trans_name').value=configData.startTransName||'';
    document.getElementById('start_trans_name_scan').disabled = !extButtonEnabled;
}

function saveFormConfig(){
    const MAX_STRING_LENGTH = 64;
    let isValid = true;
    let errorMessage = '';
    
    // Helper function to check field length
    const checkFieldLength = (fieldId) => {
        const value = document.getElementById(fieldId).value.trim();
        return value.length <= MAX_STRING_LENGTH;
    };
    
    // Helper function to check ASCII characters only
    const isASCII = (str) => /^[\x00-\x7F]*$/.test(str);
    
    // Helper function to check for spaces
    const hasSpaces = (str) => str.includes(' ');
    
    // Existing empty field validations
    if(document.getElementById('device_password').value.trim() === ''){
        isValid = false;
        errorMessage = 'Device Password cannot be empty';
    }
    else if(document.getElementById('settingsSSID').value.trim() === '' || document.getElementById('settingsPass').value.trim() === ''){
        isValid = false;
        errorMessage = 'WiFi credentials cannot be empty';
    }
    else if(document.getElementById('vesselType').value.trim() === '' || document.getElementById('numAthletes').value.trim() === '' || document.getElementById('gender').value.trim() === ''){
        isValid = false;
        errorMessage = 'Vessel information cannot be empty';
    }
    else if(document.getElementById('enable_hrm1').checked && document.getElementById('hrm1_name').value.trim() === ''){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 1 is enabled but has no name';
    }else if(document.getElementById('enable_hrm2').checked && document.getElementById('hrm2_name').value.trim() === ''){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 2 is enabled but has no name';
    }else if(document.getElementById('enable_hrm3').checked && document.getElementById('hrm3_name').value.trim() === ''){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 3 is enabled but has no name';
    }else if(document.getElementById('enable_hrm4').checked && document.getElementById('hrm4_name').value.trim() === ''){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 4 is enabled but has no name';
    }else if(document.getElementById('enable_dinamo1').checked && document.getElementById('dinamo1_name').value.trim() === ''){
        isValid = false;
        errorMessage = 'Paddle Sensor 1 is enabled but has no name';
    }else if(document.getElementById('enable_dinamo2').checked && document.getElementById('dinamo2_name').value.trim() === ''){
        isValid = false;
        errorMessage = 'Paddle Sensor 2 is enabled but has no name';
    }else if(document.getElementById('enable_dinamo3').checked && document.getElementById('dinamo3_name').value.trim() === ''){
        isValid = false;
        errorMessage = 'Paddle Sensor 3 is enabled but has no name';
    }else if(document.getElementById('enable_dinamo4').checked && document.getElementById('dinamo4_name').value.trim() === ''){
        isValid = false;
        errorMessage = 'Paddle Sensor 4 is enabled but has no name';
    }else if(document.getElementById('enable_start_trans').checked && document.getElementById('start_trans_name').value.trim() === ''){
        isValid = false;
        errorMessage = 'Start signal transmitter is enabled but has no name';
    }
    
    // New validations for spaces and non-ASCII characters
    else if(hasSpaces(document.getElementById('device_username').value) || !isASCII(document.getElementById('device_username').value)){
        isValid = false;
        errorMessage = 'Device Username cannot contain spaces or non-ASCII characters';
    }
    else if(hasSpaces(document.getElementById('device_password').value) || !isASCII(document.getElementById('device_password').value)){
        isValid = false;
        errorMessage = 'Device Password cannot contain spaces or non-ASCII characters';
    }
    
    // RouterSN validation (if provided, must be a positive integer between 0 and 9999; otherwise blank is allowed)
    else if(document.getElementById('routerSN').value.trim() !== ''){
        const routerSNRaw = document.getElementById('routerSN').value.trim();
        if(!/^\d+$/.test(routerSNRaw) || parseInt(routerSNRaw, 10) > 9999){
            isValid = false;
            errorMessage = 'Station code must be a positive integer between 0 and 9999';
        }
    }

    // Cloud pairing token (optional; if set, must fit device storage and be ASCII)
    else if(document.getElementById('cloudToken').value.trim().length > 127){
        isValid = false;
        errorMessage = 'Cloud pairing token cannot exceed 127 characters';
    }
    else if(!isASCII(document.getElementById('cloudToken').value)){
        isValid = false;
        errorMessage = 'Cloud pairing token cannot contain non-ASCII characters';
    }
    
    // HRM names non-ASCII validation
    else if(document.getElementById('enable_hrm1').checked && !isASCII(document.getElementById('hrm1_name').value)){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 1 name cannot contain non-ASCII characters';
    }
    else if(document.getElementById('enable_hrm2').checked && !isASCII(document.getElementById('hrm2_name').value)){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 2 name cannot contain non-ASCII characters';
    }
    else if(document.getElementById('enable_hrm3').checked && !isASCII(document.getElementById('hrm3_name').value)){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 3 name cannot contain non-ASCII characters';
    }
    else if(document.getElementById('enable_hrm4').checked && !isASCII(document.getElementById('hrm4_name').value)){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 4 name cannot contain non-ASCII characters';
    }
    
    // Paddle Sensor names non-ASCII validation
    else if(document.getElementById('enable_dinamo1').checked && !isASCII(document.getElementById('dinamo1_name').value)){
        isValid = false;
        errorMessage = 'Paddle Sensor 1 name cannot contain non-ASCII characters';
    }
    else if(document.getElementById('enable_dinamo2').checked && !isASCII(document.getElementById('dinamo2_name').value)){
        isValid = false;
        errorMessage = 'Paddle Sensor 2 name cannot contain non-ASCII characters';
    }
    else if(document.getElementById('enable_dinamo3').checked && !isASCII(document.getElementById('dinamo3_name').value)){
        isValid = false;
        errorMessage = 'Paddle Sensor 3 name cannot contain non-ASCII characters';
    }
    else if(document.getElementById('enable_dinamo4').checked && !isASCII(document.getElementById('dinamo4_name').value)){
        isValid = false;
        errorMessage = 'Paddle Sensor 4 name cannot contain non-ASCII characters';
    }

    // Start trans name non-ASCII validation
    else if(document.getElementById('enable_start_trans').checked && !isASCII(document.getElementById('start_trans_name').value)){
        isValid = false;
        errorMessage = 'Start signal transmitter name cannot contain non-ASCII characters';
    }
    
    // Existing string length validations
    else if(!checkFieldLength('device_password')){
        isValid = false;
        errorMessage = 'Device Password cannot exceed 64 characters';
    }
    else if(!checkFieldLength('settingsSSID')){
        isValid = false;
        errorMessage = 'WiFi SSID cannot exceed 64 characters';
    }
    else if(!checkFieldLength('settingsPass')){
        isValid = false;
        errorMessage = 'WiFi Password cannot exceed 64 characters';
    }
    else if(!checkFieldLength('routerSN')){
        isValid = false;
        errorMessage = 'Station code cannot exceed 64 characters';
    }
    else if(!checkFieldLength('vesselType')){
        isValid = false;
        errorMessage = 'Vessel Type cannot exceed 64 characters';
    }
    else if(!checkFieldLength('numAthletes')){
        isValid = false;
        errorMessage = 'Number of Athletes cannot exceed 64 characters';
    }
    else if(!checkFieldLength('gender')){
        isValid = false;
        errorMessage = 'Gender cannot exceed 64 characters';
    }
    else if(document.getElementById('enable_hrm1').checked && !checkFieldLength('hrm1_name')){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 1 name cannot exceed 64 characters';
    }
    else if(document.getElementById('enable_hrm2').checked && !checkFieldLength('hrm2_name')){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 2 name cannot exceed 64 characters';
    }
    else if(document.getElementById('enable_hrm3').checked && !checkFieldLength('hrm3_name')){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 3 name cannot exceed 64 characters';
    }
    else if(document.getElementById('enable_hrm4').checked && !checkFieldLength('hrm4_name')){
        isValid = false;
        errorMessage = 'Heart Rate Monitor 4 name cannot exceed 64 characters';
    }
    else if(document.getElementById('enable_dinamo1').checked && !checkFieldLength('dinamo1_name')){
        isValid = false;
        errorMessage = 'Paddle Sensor 1 name cannot exceed 64 characters';
    }
    else if(document.getElementById('enable_dinamo2').checked && !checkFieldLength('dinamo2_name')){
        isValid = false;
        errorMessage = 'Paddle Sensor 2 name cannot exceed 64 characters';
    }
    else if(document.getElementById('enable_dinamo3').checked && !checkFieldLength('dinamo3_name')){
        isValid = false;
        errorMessage = 'Paddle Sensor 3 name cannot exceed 64 characters';
    }
    else if(document.getElementById('enable_dinamo4').checked && !checkFieldLength('dinamo4_name')){
        isValid = false;
        errorMessage = 'Paddle Sensor 4 name cannot exceed 64 characters';
    }
    else if(document.getElementById('enable_start_trans').checked && !checkFieldLength('start_trans_name')){
        isValid = false;
        errorMessage = 'Start signal transmitter name cannot exceed 64 characters';
    }
    
    if(!isValid){
        showMessage(errorMessage, false);
        return;
    }
    updateRawConfigFromForm();
    saveConfig(document.getElementById('configEditor').value);
}

function updateRawConfigFromForm(){
    configData = {
        deviceUsername: document.getElementById('device_username').value,
        devicePassword: document.getElementById('device_password').value,
        settingsSSID: document.getElementById('settingsSSID').value,
        settingsPass: document.getElementById('settingsPass').value,
        cloudToken: document.getElementById('cloudToken').value.trim(),
        routerSN: document.getElementById('routerSN').value || '0000',
        enableLogging: document.getElementById('enable_logging').checked,
        enableStreaming: document.getElementById('enable_streaming').checked,
        vesselType: document.getElementById('vesselType').value,
        numAthletes: document.getElementById('numAthletes').value,
        gender: document.getElementById('gender').value,
        hrm: [
            {enable: document.getElementById('enable_hrm1').checked, name: document.getElementById('hrm1_name').value},
            {enable: document.getElementById('enable_hrm2').checked, name: document.getElementById('hrm2_name').value},
            {enable: document.getElementById('enable_hrm3').checked, name: document.getElementById('hrm3_name').value},
            {enable: document.getElementById('enable_hrm4').checked, name: document.getElementById('hrm4_name').value}
        ],
        dinamo: [
            {enable: document.getElementById('enable_dinamo1').checked, name: document.getElementById('dinamo1_name').value},
            {enable: document.getElementById('enable_dinamo2').checked, name: document.getElementById('dinamo2_name').value},
            {enable: document.getElementById('enable_dinamo3').checked, name: document.getElementById('dinamo3_name').value},
            {enable: document.getElementById('enable_dinamo4').checked, name: document.getElementById('dinamo4_name').value}
        ],
        enableStartTrans: document.getElementById('enable_start_trans').checked,
        startTransName: document.getElementById('start_trans_name').value
    };
    
    document.getElementById('configEditor').value = JSON.stringify(configData, null, 2);
}

function saveRawConfig(){
    try {
        configData = JSON.parse(document.getElementById('configEditor').value);
        updateFormFields();
        saveConfig(document.getElementById('configEditor').value);
    } catch(e) {
        showMessage('Invalid JSON format', false);
    }
}

function saveConfig(configData){
    fetch('/api/config',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:configData
    })
    .then(response=>response.text())
    .then(result=>{
        showMessage(result,true);
    })
    .catch(error=>{
        showMessage(error.message,false);
    });
}

// === BLE device picker =====================================================
// Lets the user scan for nearby compatible BLE devices and pick one instead of
// typing its name. Backed by /api/ble/scan, /api/ble/scan/results,
// /api/ble/connect and /api/ble/connect/status (SETTING state only).

const bleScan = { target: null, enableId: null, type: 'hrm', pollTimer: null };

function setBleStatus(text, kind){
    const el = document.getElementById('bleScanStatus');
    el.textContent = text;
    el.className = 'ble-scan-status' + (kind ? ' ' + kind : '');
}

function openBleScan(fieldId, enableId, type){
    bleScan.target = fieldId;
    bleScan.enableId = enableId;
    bleScan.type = type;
    document.getElementById('bleScanTitle').textContent =
        (type === 'button') ? 'Scan for start transmitter' : 'Scan for heart rate monitors';
    document.getElementById('bleScanModal').style.display = 'flex';
    startBleScan();
}

function closeBleScan(){
    clearTimeout(bleScan.pollTimer);
    document.getElementById('bleScanModal').style.display = 'none';
}

async function startBleScan(){
    clearTimeout(bleScan.pollTimer);
    document.getElementById('bleScanList').innerHTML = '';
    setBleStatus('Starting scan…', 'scanning');
    try {
        const res = await fetch('/api/ble/scan?type=' + encodeURIComponent(bleScan.type));
        if(!res.ok){
            setBleStatus(res.status === 409
                ? 'Bluetooth is busy. Wait a moment and rescan.'
                : 'Could not start the scan.', 'error');
            return;
        }
        pollBleResults();
    } catch(e){
        setBleStatus('Could not start the scan.', 'error');
    }
}

function pollBleResults(){
    clearTimeout(bleScan.pollTimer);
    const tick = async () => {
        try {
            const res = await fetch('/api/ble/scan/results');
            const data = await res.json();
            const devices = data.devices || [];
            renderBleDevices(devices);
            if(data.scanning){
                setBleStatus('Scanning for devices…', 'scanning');
                bleScan.pollTimer = setTimeout(tick, 1000);
            } else {
                const n = devices.length;
                setBleStatus(n
                    ? `Scan finished — ${n} device${n > 1 ? 's' : ''} found.`
                    : 'Scan finished — no compatible devices found.',
                    n ? 'done' : 'error');
            }
        } catch(e){
            setBleStatus('Lost connection during the scan.', 'error');
        }
    };
    tick();
}

function renderBleDevices(devices){
    const list = document.getElementById('bleScanList');
    const sorted = devices.slice().sort((a, b) => 
        (b.rssi != null ? b.rssi : -127) - (a.rssi != null ? a.rssi : -127)
    );
    list.innerHTML = '';

    sorted.forEach(d => {
        const named = d.name && d.name.trim() !== '';

        const li = document.createElement('li');
        li.className = 'ble-device';

        const info = document.createElement('div');
        info.className = 'ble-device-info';

        const nameEl = document.createElement('span');
        nameEl.className = 'ble-device-name' + (named ? '' : ' muted');
        nameEl.textContent = named ? d.name : '(unnamed)';

        const meta = document.createElement('span');
        meta.className = 'ble-device-meta';
        meta.textContent = (d.mac || '') +
            (typeof d.rssi === 'number' ? ' · ' + d.rssi + ' dBm' : '');

        info.appendChild(nameEl);
        info.appendChild(meta);

        const actions = document.createElement('div');
        actions.className = 'ble-device-actions';

        const testBtn = document.createElement('button');
        testBtn.type = 'button';
        testBtn.className = 'ble-test';
        testBtn.textContent = 'Test';
        testBtn.addEventListener('click', () => testBleDevice(d.mac, testBtn));

        const pickBtn = document.createElement('button');
        pickBtn.type = 'button';
        pickBtn.className = 'ble-pick';
        pickBtn.textContent = 'Select';
        if(named){
            pickBtn.addEventListener('click', () => selectBleDevice(d.name));
        } else {
            pickBtn.disabled = true;
            pickBtn.title = 'Device has no name to save';
        }

        actions.appendChild(testBtn);
        actions.appendChild(pickBtn);
        li.appendChild(info);
        li.appendChild(actions);
        list.appendChild(li);
    });
}

function selectBleDevice(name){
    const enableEl = document.getElementById(bleScan.enableId);
    if(enableEl && !enableEl.checked){
        enableEl.checked = true;
        toggleTextInput(bleScan.target, true);
    }
    const field = document.getElementById(bleScan.target);
    field.disabled = false;
    field.value = name;
    closeBleScan();
    showMessage('Selected "' + name + '". Remember to Save Configuration.', true);
}

async function testBleDevice(mac, btn){
    if(!mac) return;
    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Testing…';

    const restore = () => {
        btn.textContent = original;
        btn.disabled = false;
        btn.classList.remove('ok', 'fail');
    };

    try {
        const res = await fetch('/api/ble/connect?mac=' + encodeURIComponent(mac));
        if(!res.ok){
            btn.textContent = res.status === 409 ? 'Busy' : 'Error';
            setTimeout(restore, 2000);
            return;
        }

        const start = Date.now();
        const poll = async () => {
            try {
                const sres = await fetch('/api/ble/connect/status');
                const s = await sres.json();
                if(s.state === 'ok'){
                    btn.textContent = '✓ OK';
                    btn.classList.add('ok');
                    setTimeout(restore, 2500);
                } else if(s.state === 'failed'){
                    btn.textContent = '✕ Failed';
                    btn.classList.add('fail');
                    setTimeout(restore, 2500);
                } else if(Date.now() - start > 12000){
                    restore();
                } else {
                    setTimeout(poll, 700);
                }
            } catch(e){
                restore();
            }
        };
        poll();
    } catch(e){
        restore();
    }
}

// Close the modal when clicking the dimmed backdrop.
document.getElementById('bleScanModal').addEventListener('click', function(e){
    if(e.target === this) closeBleScan();
});

loadConfig();