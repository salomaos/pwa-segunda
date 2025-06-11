const CACHE_NAME = "my-cache-v1";

const CACHE_ASSETS = [
    "/",
    "/about.html",
    "/app.js",
    "/index.html",
    "/manifest.json",
    "/images/icons/icon-192x192.png",
    "/images/icons/icon-512x512.png",
    "/offline.html"
]

self.addEventListener("install", (event) => {
    console.log("Service Worker instalado com sucesso.");

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll(CACHE_ASSETS);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }).catch(() => {
            return caches.match("/offline.html");
        })
    )
});