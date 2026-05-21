const CACHE_NAME = 'tiger-literacy-v1';
const ASSETS = [
    'index.html',
    'step1.html',
    'step1-cross.html',
    'step1-grid.html',
    'step2.html',
    'step3.html',
    'common.css',
    'common.js',
    'img/cover.png',
    'img/character_04.png',
    'img/tig.png',
    'img/cha_01.png',
    'img/cha_02.png',
    'img/chaek.png',
    'img/momo.png',
    'img/meora.png',
    'img/moon.png'
];

// 서비스 워커 설치 시 자원 캐싱
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS).catch(err => {
                console.warn("PWA Service Worker offline assets caching warning:", err);
            });
        })
    );
});

// 캐시 기반 응답 (오프라인 지원) 및 네트워크 폴백
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});
