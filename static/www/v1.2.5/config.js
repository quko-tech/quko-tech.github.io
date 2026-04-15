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
    }
    
    // External button
    const extButtonEnabled = configData.enableStartTrans||false;
    document.getElementById('enable_start_trans').checked = extButtonEnabled;
    document.getElementById('start_trans_name').disabled = !extButtonEnabled;
    document.getElementById('start_trans_name').value=configData.startTransName||'';
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
    
    // RouterSN validation (must be number between 0-9999)
    else if(document.getElementById('routerSN').value.trim() !== ''){
        const routerSNValue = parseInt(document.getElementById('routerSN').value.trim());
        if(isNaN(routerSNValue) || routerSNValue < 0 || routerSNValue > 9999){
            isValid = false;
            errorMessage = 'Station code must be a number between 0 and 9999';
        }
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

loadConfig();