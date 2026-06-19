const CACHE_NAME = 'tiger-literacy-v15';
const BASE = '/literacy/';
const ASSETS = [
    BASE,
    BASE + 'index.html',
    BASE + 'step1.html',
    BASE + 'step1-cross.html',
    BASE + 'step1-grid.html',
    BASE + 'step2.html',
    BASE + 'step3.html',
    BASE + 'common.css',
    BASE + 'common.js',
    BASE + 'step3.js',
    BASE + 'manifest.json',
    BASE + 'img/cover.png',
    BASE + 'img/character_04.png',
    BASE + 'img/appicon.png',
    BASE + 'img/tig.png',
    BASE + 'img/cha_01.png',
    BASE + 'img/cha_01_02.png',
    BASE + 'img/cha_02.png',
    BASE + 'img/chat_loading.mp4',
    BASE + 'img/friends.png',
    BASE + 'img/chaek.png',
    BASE + 'img/momo.png',
    BASE + 'img/meora.png',
    BASE + 'img/moon.png',
    BASE + 'img/story.default.png',
    BASE + 'img/story.fun.png',
    BASE + 'img/story.tensity.png',
    BASE + 'img/story.warm.png',
    BASE + 'img/emoti.momo.default.png',
    BASE + 'img/emoti.momo.fun.png',
    BASE + 'img/emoti.momo.tensity.png',
    BASE + 'img/emoti.momo.warm.png',
    BASE + 'img/emoti.meora.default.png',
    BASE + 'img/emoti.meora.fun.png',
    BASE + 'img/emoti.meora.tensity.png',
    BASE + 'img/emoti.meora.warm.png'
];

// 서비스 워커 설치 시 자원 캐싱
self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS).catch(err => {
                console.warn("PWA: 일부 자원 캐싱 실패 (무시 가능)", err);
            });
        })
    );
});

// 구버전 캐시 정리
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// 캐시 기반 응답 (오프라인 지원) 및 네트워크 폴백
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});
