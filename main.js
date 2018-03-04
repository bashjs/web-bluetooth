document.getElementById('requestAllDevices').addEventListener('click', () => {
  if ('bluetooth' in navigator) {
    navigator.bluetooth.requestDevice({
      acceptAllDevices: true
    }).then((...args) => {
      console.log(...args);
    })
    .catch((...args) => {
      console.error(...args);
    })
  }
});