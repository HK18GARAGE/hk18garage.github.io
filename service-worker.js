self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("hk18-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./logo.webp",
        // Add other important files here like ./style.css, ./script.js etc.
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});