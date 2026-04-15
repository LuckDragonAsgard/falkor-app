// Falkor Service Worker — enables offline + install prompt
const CACHE = 'falkor-v1';
const URLS = ['/', '/index.html', '/falkor-manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS)));
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
