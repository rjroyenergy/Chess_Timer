/* 
   Title: Chess Timer PWA Service Worker (Online Version)
   File: service-worker.js
   Description: Part C of 4 — Minimal service worker enabling PWA installability.
                No caching, no offline mode. Always fetches fresh content online.
*/
/* Part C of 4 */

// Online-only PWA: no caching, no offline storage
self.addEventListener("install", event => {
    // Activate immediately
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    // Claim clients so updates apply instantly
    event.waitUntil(self.clients.claim());
});

// Always fetch from network — no caching
self.addEventListener("fetch", event => {
    event.respondWith(fetch(event.request));
});

/* End of Part C */
/* EOF */