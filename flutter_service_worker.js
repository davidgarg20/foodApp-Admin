'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "f0651f415926c5eec2479a99a69a2882",
"assets/lang/id.json": "44ffe1c911c2f14140f50502ce453beb",
"assets/lang/fr.json": "74dcc7422080d227b07a633ae8158d32",
"assets/lang/vi.json": "878fa127ff9e85dd15d79eccb4e8b1c9",
"assets/lang/tr.json": "bd7085aabcd2c458e8e85f6b7ff6ebb6",
"assets/lang/pt.json": "527ea20863b93b3106ce22d5867e108f",
"assets/lang/hi.json": "d7f2ee491f7028d5a96fd14792f98928",
"assets/lang/de.json": "2a02f3008145699ea3de7ba7ca3b8186",
"assets/lang/es.json": "dcc0d40bf2efa05fe657d636d011fd90",
"assets/lang/af.json": "4e7216298faff3872f0388734a420867",
"assets/lang/ar.json": "a54d9587c593fcc519373eca749f8ca0",
"assets/lang/en.json": "bf7c81a50dfc98915b5a668d092b8a7e",
"assets/lang/nl.json": "2cb2ae522588aec0a13af45d5301a81f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "a0a3437493bda9ea6dd0975490a2e100",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "1ab236ed440ee51810c56bd16628aef0",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "e766963327e0a89f9ec2ba88646b6177",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "db78b9359171f24936b16d84f63af378",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/AssetManifest.json": "0515c2537b0642940d1ae90f2dddc518",
"assets/NOTICES": "882a4b27b03a0c40b97d4d996d2ea5f4",
"assets/images/home.png": "3cf3bbf96663fefac4e687373e2fdecc",
"assets/images/ic_logout.png": "ea0ba75540e82105094fc0c1ce5b73e2",
"assets/images/ic_restaurant.png": "429305229f4b907a56b8a24a448830ed",
"assets/images/setting_img.png": "73fb9a57509fd6867ad2ec6f1adab935",
"assets/images/appLogoTrans.png": "07114d46e3d180f4c19e37044f65ef31",
"assets/images/ic_order.png": "89f4de9c011e5ce9414442ebf887e9e1",
"assets/images/profile.png": "5c4a3985cdfb63c0f56ac42d1a1baff4",
"assets/images/ic_menu.png": "2360d869f48cac8a64b1b392104b3bb4",
"assets/images/logo.png": "fd3611d0436c78da264806ee40cc922b",
"assets/images/placeholder.jpg": "0d76c36102ab7301fb582fe101acb506",
"assets/images/flag/ic_portugal.png": "7b738112b45a26cbf1f4de2fb221da95",
"assets/images/flag/ic_spain.png": "b9b6d8bf7a26a75e84a6ad6b18462e00",
"assets/images/flag/ic_germany.png": "be44cab6fec15f70e2c84862838aeb6e",
"assets/images/flag/ic_turkey.png": "f8255db14d2856d02e78a54f676734c8",
"assets/images/flag/ic_vitnam.png": "7d6ede3308bebf4302a0e357d7f6af0b",
"assets/images/flag/ic_ar.png": "ead63c82d77a99b1c50230f75153b47f",
"assets/images/flag/ic_us.png": "da547d78f0813ecfca786901eca9e9a5",
"assets/images/flag/ic_indonesia.png": "e7cedeba8c9bcc7b068727d37ab1a2d1",
"assets/images/flag/ic_dutch.png": "26345c43ad618fa2dae511c8e02bb2f1",
"assets/images/flag/ic_south_africa.png": "8c2d97c5a4d316ada818518a65c4d898",
"assets/images/flag/ic_france.png": "40dc814b25b14060af3bb7ecb3adb39b",
"assets/images/flag/ic_india.png": "a5f4b487e6b01ff36c6ab3b0017ad34d",
"assets/images/ic_settings.png": "92c25f37d91bbc70ba1a197b38c0b57c",
"assets/images/ic_user.png": "b8982e196d7c86f12143ffa41d2b33a8",
"assets/images/ic_home.png": "56f8205850dc6a2e92c791a67e91da6f",
"index.html": "cdc7722fef55f8b3d529ea14b6cf6d30",
"/": "cdc7722fef55f8b3d529ea14b6cf6d30",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "8c10f24d105bb562e2dcca4537e699d4",
"main.dart.js": "b3f49af1e85952a4aa4647a6273d18c1",
"manifest.json": "eb844f55900e7838f689bf51fc30e197",
"version.json": "73f53dbb19969004c7959fe5b4e40d72"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
