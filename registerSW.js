if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/air_pwa/sw.js', { scope: '/air_pwa/' })})}