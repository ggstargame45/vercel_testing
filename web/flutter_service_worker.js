'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c2133af2794593495dc25a0d488a3fd6",
"version.json": "79320a44ba1f38cc9f7782a8b3050812",
"splash/img/light-2x.png": "abb4e8d1a1ae76f23860eca67df8c21b",
"splash/img/dark-4x.png": "82b7222853b9bb922cc68dda1476ba3f",
"splash/img/light-3x.png": "4966ff33cd21720029245381b0e8f733",
"splash/img/dark-3x.png": "4966ff33cd21720029245381b0e8f733",
"splash/img/light-4x.png": "82b7222853b9bb922cc68dda1476ba3f",
"splash/img/dark-2x.png": "abb4e8d1a1ae76f23860eca67df8c21b",
"splash/img/dark-1x.png": "3384c449b5060cd29f8384b905353746",
"splash/img/light-1x.png": "3384c449b5060cd29f8384b905353746",
"index.html": "28966be073dc2d2037bcf78cf125e853",
"/": "28966be073dc2d2037bcf78cf125e853",
"main.dart.js": "2c74d0372576b3b161a77e019cb66ce1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "58197bc31f88b09f5630c92850f022ee",
"icons/Icon-192.png": "955abcba0c180310c24aa5e55120253d",
"icons/Icon-maskable-192.png": "955abcba0c180310c24aa5e55120253d",
"icons/Icon-maskable-512.png": "8d59e4e3389d45f29afc320a39f3f6db",
"icons/Icon-512.png": "8d59e4e3389d45f29afc320a39f3f6db",
"manifest.json": "2d098b81210d017c9a3ca6a9cdd4e0df",
"assets/shorebird.yaml": "97a91bec5cc0a9f4cea6e15381647348",
"assets/AssetManifest.json": "a0a7d43ae5545de518b703a6236c2195",
"assets/NOTICES": "569657643231c4717a491ac3901e3bce",
"assets/FontManifest.json": "a3c3ec6f15d24cb2c1927557526778e4",
"assets/AssetManifest.bin.json": "bdf1782e30dcfc6104eb5a75a56a2aa2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "70bebbb916b19f2e1db70c70197e275b",
"assets/fonts/MaterialIcons-Regular.otf": "003f10aa8d2bf771d95060837975cbd0",
"assets/assets/images/explain.png": "ac9308de3966bded36276e6af3e02605",
"assets/assets/images/mage.png": "cf6a8fc9bbd97a31e7d0fe7de1ad5c3b",
"assets/assets/images/community.png": "302d70eea06dcae0a264f2c1ec2487c2",
"assets/assets/images/translate.png": "c0e69ef8becef84a63dc7f17960dfa43",
"assets/assets/images/NJ_GetUp_2.jpeg": "68cf76a7fdd2b4caaf15ff43c73ce934",
"assets/assets/images/edit.png": "6439b8aa8351e58fd3edfa853e35b6d4",
"assets/assets/images/categories/steal.jpeg": "03f21ea71b5408c37c0e24a274f79c2f",
"assets/assets/images/categories/carcrash.jpeg": "076f5b521fc9615655543501a2d938f3",
"assets/assets/images/categories/hit.png": "a41df7ebeb94ffa61f649812f3f29d2b",
"assets/assets/images/categories/money.png": "a46d3ae59bc7d1741fbc6143b46b7466",
"assets/assets/images/categories/gender.png": "e9ad26701664b154221e64c3f80d80bd",
"assets/assets/images/send.png": "c53fa4cf126b3343ab8baa9394041dcb",
"assets/assets/icons/jumunseo_logo.png": "5cd408319def56c5e3db155d6c727744",
"assets/assets/icons/logo.png": "5cd408319def56c5e3db155d6c727744",
"assets/assets/icons/main_logo2.png": "4bdbffaed75407e4279be7cc5fdd1cbb",
"assets/assets/icons/jumunseo_letter.png": "d99576d9eecb0c45e403d46aad8220c1",
"assets/assets/icons/profile.png": "242f98889c7d3293c16c0ba7dadc8b32",
"assets/assets/icons/main_logo.png": "278d2dc5374a25cd0da0ed8eb6e96004",
"assets/assets/icons/setting.png": "ab41a3af948024a538aa0ae2406a33c3",
"assets/assets/fonts/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/assets/fonts/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/animations/punch_lottie.json": "b1ec9a87a39d8d7127094a213ac24ff3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
