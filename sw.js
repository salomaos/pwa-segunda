const CACHE_NAME = "my-cache-v1";

const CACHE_ASSETS = [
    "/",
    "/pwa-segunda/about.html",
    "/pwa-segunda/app.js",
    "/pwa-segunda/index.html",
    "/pwa-segunda/manifest.json",
    "/pwa-segunda/images/icons/icon-192x192.png",
    "/pwa-segunda/images/icons/icon-512x512.png",
    "/pwa-segunda/offline.html"
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