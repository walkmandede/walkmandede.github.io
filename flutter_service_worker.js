'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dc9ec7eae7921eb71fbbd74f7001cd5b",
"version.json": "1b4e03e13dc693689044bfb5b0d2a7f0",
"index.html": "bdf56c90221749bcbeafb2d6e4df7e9e",
"/": "bdf56c90221749bcbeafb2d6e4df7e9e",
"main.dart.js": "e30d7a4f3e577e4f22e0a1ac409100cf",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "9225098f2e166c5f7a8d211968706553",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eb981c221d7097bb529ce1da098380c8",
".git/config": "b39439d59d30e52d3eb3fe6e56dcf0af",
".git/objects/0c/1c22bfa64ca85197a791ec0f5ccae1d95bb88c": "43dd05c23015de0b18a47fbfabc0774c",
".git/objects/0c/6ad33813c063e5c98589631e73d91e4b735327": "62681df5cc333935701950041e6ddbc4",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/cce74173328803f3575f5870d95df04b4d12a0": "eee7b16291e94d65c02dbc9519d65558",
".git/objects/03/f6c31123654c10cf41edd22ba84981f43c5db9": "642454456c0593cfdc6ecf53cc494b66",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/0e/59ad83da3bb958cf6a04d4e69f1f647e4c1211": "7aa32d5cd91d11deec972c7af4fe2087",
".git/objects/34/2e93955cf4e64433da2fd9cd82009ca66c2073": "1b8e21569fc2846c10dafc79af488b63",
".git/objects/5a/b45f31c94ce84a190e77be0199d1288346392a": "f7b2a67fdea3abf939b436555b90c4a8",
".git/objects/05/f7b84ba5775b097984bed0a514c4e2e6cef896": "92b24c3f610bbd831f2b16dd9d500541",
".git/objects/ad/c8b80b4c27668f017eee607b7a6b6f0904c6fd": "019d16aada1922315ebba7eaab2ec260",
".git/objects/bb/3e755a180dcbda02f61fe0eeadc346c3f6722d": "e5e8e96e9f2dafd3a9ee54166cd34a93",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c990e17a4df72e10a48cc8fdf5414d059689c6": "c635bf2741708dbe5212bc42e0112432",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c8/6bca65dbc172e0411e92f4a3ac99e8fc93de4b": "f738926d2a2e1ca03ed0cc4cdd1a4b56",
".git/objects/ec/ece2fd9b5ed1dd997671397724c00a06b00a23": "327736cc3a422b51e09f972747745546",
".git/objects/4b/bcf6685d0a51575b7e87a78a02c1d26eb16fe3": "99e98b66ce44667fd2e5ef6dd743c57f",
".git/objects/7c/a42a2aaa0219ac39087cebbbdb666a851c1b5d": "d41bab33bd4443a6eca4cb84ee2cf459",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/14df35f42d0ea81e336e3293ba69505557fcf4": "58e16c3ed00cb214a3884fa59b67f432",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/e68a9b5ee9cf5c233ef656cf0ea1671d1a7911": "bbe93c97955d02b5156703f92011085e",
".git/objects/36/a9eb0377fb14c93830a13c48dd750f7746e8e8": "a45ee0d2820fbd6ebed1e80ce663a7f0",
".git/objects/5c/9073e233e74e403ec00ef8d0fd4870bc3815dd": "d711c31a1efc4ba6203e359fc9ca982d",
".git/objects/5c/2440cf274a9b6d8b161fe13e1d8459e2ea601d": "60e22111a0f840ca7e89b744c4b7575f",
".git/objects/91/a469aed70e9c47b8c65fe53fffe24776d37bb4": "d37239583e7a0888aa00d3a743fa82c3",
".git/objects/62/17f0d3c880fd14e5a82a3d999b96003894d8b0": "deba9810a23d80e5c7de96a8db94aedb",
".git/objects/62/85ac9a3f6f4adbf04f39e0a33be8ac0f3ad5f6": "7d60909a34ae1297b980cba25af42658",
".git/objects/96/cedeece45a12c67e11859d34288e74867557d0": "a39eedd35c39b03f424e0f95bcbf8b7b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/ad81bfddc8e4ba1cc6121919b41a184347f003": "8606df01995a3afdc72774de3a14a79e",
".git/objects/6c/7b6ae339f5707c68651b3577847d2c5e92c9d2": "292592f0c266abef496d5a9aebb68fd5",
".git/objects/63/221e5d64b29439a9fd0c2a8842fc830c69c902": "a8a27e60d09b80025b1ff1b3b68a9d35",
".git/objects/0a/511a474645061cae8d4cbf6e18d51e5ac41dba": "4d036d9f795f6faff4c014bf75a4f6d3",
".git/objects/90/11f621db30a820c7d4dcc8f2ff5c214cbeee8a": "11ed2907a64b36913584224c6c17a517",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/048f028bf3507d98296ff84c266be20ead9a33": "b888c2cbfb2d66aa683133c0b235e53f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/b101740498a776d451e7db9ce7597b87cc28e8": "a0de4627ed939a18ef79847832bf89db",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/fe615dec19ece16da45129ebde9638bff9d1d4": "ff35d6d7d15db3b568b29b7ad1d6c444",
".git/objects/b6/29d2bb6994eb9a285773eb3034f013a7770bbf": "dee61a2a349e0da8eeac057cddd1128c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/7304f1cf811e66a5636b47f3fa987ca6e2cec1": "10cfe5c8a2a0fbd1e2ee1a0022b0e09c",
".git/objects/f7/aef10543caf6860bee6b188c13c77bb5af8302": "6e21e7895693e5c5ceadea8916519af9",
".git/objects/e8/bdf95fc63a9ab401e75883c5aab115dc677f78": "c11ddf6d6e37f52a8fb36a6419131ffd",
".git/objects/fa/d04b141e9788a598521d6279f918b08abca44d": "fb77e32daad7b35951cc22e9e3d38f70",
".git/objects/e0/0d725a8d5429725bb68b4221100656b08e34d1": "da68365340fc4145139592646c627dac",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/e3377d5fe23ed7f1543bb9292ddaff6529b188": "dd74688913b42db0c92b7936dd4f4a65",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/8734ad6fdaae0ad1c82cedbc6c571fcf1a6397": "48f0201dad3c57be4253a3f45fbf1262",
".git/objects/49/77028d132b681c035d427748f74afab9fd70bf": "7f99c84bbaa6727b6cddcec7686867ec",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/7f/14d8acdad21f0d49edd8ac4d4ebb8f37cb8397": "5b9db2caeaf22b85608fe01cb92548c6",
".git/objects/7a/2a794aba89da4282fe6abde2b01a752fdbad7f": "4d4b94786440f972627cc7bf6cea541d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "70090503a75369520069ed1ee3116dfa",
".git/logs/refs/heads/main": "ee896f1ded2a0595ff03e3b80bebb3c8",
".git/logs/refs/remotes/origin/main": "f0fc8bbdfdd07f0d209ef91e084f20be",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a6d4db11866b4ce6306c4534ba55e1cc",
".git/refs/remotes/origin/main": "a6d4db11866b4ce6306c4534ba55e1cc",
".git/index": "f64fe24ee33f7364af4e2ca7a2bee177",
".git/COMMIT_EDITMSG": "72440f4f58476bafb4b1027ea0494cad",
"assets/AssetManifest.json": "85134d1b01649a32e8da870cef1eff48",
"assets/NOTICES": "da40437acbb0498747faf025e6df3096",
"assets/FontManifest.json": "5684a6e3a62f5ffb3b3a85d1f999837a",
"assets/AssetManifest.bin.json": "ff4749b309f04f00b93b21b1464c47af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9b28fdae9f60b13736f679023b1ad96d",
"assets/fonts/MaterialIcons-Regular.otf": "ded46252891db779cbad10958cf01f7e",
"assets/assets/images/code_view_bg.png": "71648bb935e2513eab74beacd151d059",
"assets/assets/images/my_pic.jpeg": "fbab51e34e5276d53897e45922b237a3",
"assets/assets/images/projects_logo/l2e_ss1.webp": "6c4463698e1d76a05d30e590069d882f",
"assets/assets/images/projects_logo/l2e_logo.webp": "272f15f513ff03d22117947f7bb66b9d",
"assets/assets/images/projects_logo/l2e_ss5.png": "7efe7af581d46dd49c20d33f289cef08",
"assets/assets/images/projects_logo/l2e_ss3.webp": "674d2bac21807579c82b44c70fe800cb",
"assets/assets/images/projects_logo/l2e_ss2.webp": "1217d5884b788bcd184ef30f9acbb7d6",
"assets/assets/fonts/megatrans/megatrans.otf": "648fb637984037c39f98c75887811af1",
"assets/assets/fonts/ubuntu/UbuntuMono-Bold.ttf": "d3e281ca75369e8517b3910bc46a7ed0",
"assets/assets/fonts/ubuntu/UbuntuMono-Regular.ttf": "c8ca9c5cab2861cf95fc328900e6f1a3",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
