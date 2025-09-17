let checkInterval;
let connectionLostTimeout;

// Check if update is complete by testing connection
function checkConnection() {
  fetch('/', { method: 'HEAD' })
    .then(() => {
      // Connection successful, update must be complete
      clearInterval(checkInterval);
      clearTimeout(connectionLostTimeout);
      window.location.href = '/';
    })
    .catch(() => {
      // Still updating, connection not available yet
      if (connectionLostTimeout) {
        clearTimeout(connectionLostTimeout);
      }
      
      // Set a timeout to show "restarting" message if connection is lost for too long
      connectionLostTimeout = setTimeout(() => {
        document.querySelector('.status-message').textContent = 'Device is restarting...';
        document.querySelector('.sub-message').textContent = 'Please wait for the device to complete the update';
      }, 10000);
    });
}

// Start checking after page loads
window.onload = function() {
  // Wait a bit before starting checks to ensure update has begun
  setTimeout(() => {
    checkInterval = setInterval(checkConnection, 2000);
  }, 5000);
};