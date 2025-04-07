const CACHE_NAME = 'muyu-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/sounds/muyu.mp3',
    '/icons/icon-72x72.png',
    '/icons/icon-192x192.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});