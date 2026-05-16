const CACHE_NAME = 'trail-knotz-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/static/js/bundle.js',
    '/static/css/main.css',
];

// Knot data that should be available offline
const KNOT_ASSETS = [
    '/api/knots/registry',
    // 3D model URLs would be added here as they become available
];

// Install: Cache all static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Trail Knotz SW] Caching static assets');
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch: Serve from cache first, then network (Stale-While-Revalidate)
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Skip WebSocket and external API calls
    if (event.request.url.includes('/socket.io') || event.request.url.includes('elevenlabs')) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request)
                .then((networkResponse) => {
                    // Update the cache with the fresh response
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => {
                    // If network fails and no cache, return offline page
                    if (event.request.mode === 'navigate') {
                        return caches.match('/index.html');
                    }
                    return null;
                });

            // Return cached response immediately, update in background
            return cachedResponse || fetchPromise;
        })
    );
});

// Background Sync: Queue verification submissions when offline
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-verification') {
        event.waitUntil(syncVerificationQueue());
    }
});

async function syncVerificationQueue() {
    // Retrieve queued verification submissions from IndexedDB
    // and POST them to the server when back online
    console.log('[Trail Knotz SW] Syncing verification queue...');
}
