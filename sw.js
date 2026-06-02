self.addEventListener('install', (e) => {
  console.log('[Service Worker] Terinstal');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Aktif');
  e.waitUntil(clients.claim()); // Memaksa SW langsung mengambil alih
});

self.addEventListener('fetch', (e) => {
  // Memberitahu Chrome bahwa kita merespons jaringan, walau hanya bypass
  e.respondWith(fetch(e.request).catch(() => {
    console.log('Tidak ada koneksi internet');
  }));
});
