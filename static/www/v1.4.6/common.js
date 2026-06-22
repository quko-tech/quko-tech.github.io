// Common utility functions shared across pages

// Single source of truth for the app version, shown in every page footer.
var APP_VERSION = '1.4.0';

// Highlight active nav link
(function(){
  var page = location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.menu a');
  for(var i = 0; i < links.length; i++){
    if(links[i].getAttribute('href').replace('./','') === page) links[i].classList.add('active');
  }
})();

// Fill in the version number in the footer(s)
(function(){
  var els = document.querySelectorAll('.app-version');
  for(var i = 0; i < els.length; i++){
    els[i].textContent = APP_VERSION;
  }
})();

/**
 * Display a success or error message to the user
 * @param {string} message - The message to display
 * @param {boolean} isSuccess - Whether this is a success (true) or error (false) message
 * @param {string} hostname - Optional hostname for redirect functionality
 */
function showMessage(message, isSuccess, hostname = null) {
  const messageArea = document.getElementById('messageArea');
  messageArea.innerHTML = `<div class='message ${isSuccess ? 'success' : 'error'}'>${message}</div>`;
  
  // Special handling for connection setup page: count down, then redirect to <hostname>.local
  if (isSuccess && hostname) {
    let secondsLeft = 10;
    const target = 'http://' + hostname + '.local';

    // Create countdown display
    messageArea.innerHTML = `
      <div class='message success'>
        ${message}<br><br>
        Make sure the device is connected to the <strong>same WiFi network</strong> as this computer.<br><br>
        Redirecting to <a href="${target}">${hostname}.local</a> in <span id="countdown">${secondsLeft}</span>s.
      </div>
    `;

    // Update countdown every second, then redirect to <hostname>.local
    const countdownInterval = setInterval(() => {
      secondsLeft--;
      document.getElementById('countdown').textContent = secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(countdownInterval);
        window.location.href = target;
      }
    }, 1000);
  } else {
    // Auto-hide message after 5 seconds for regular messages
    setTimeout(() => {
      messageArea.innerHTML = '';
    }, 5000);
  }
}

/**
 * Format file size in bytes to human readable format
 * @param {number} bytes - Size in bytes
 * @returns {string} Formatted size string
 */
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}

/**
 * Format file size with proper units (more detailed version)
 * @param {number} bytes - Size in bytes
 * @returns {string} Formatted size string with units
 */
function formatSizeWithUnit(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  let formattedSize;
  if (unitIndex === 0) {
    formattedSize = size;
  } else {
    formattedSize = size.toFixed(2);
  }
  
  return `${formattedSize} ${units[unitIndex]} `;
}