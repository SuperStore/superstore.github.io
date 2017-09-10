importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "e852328b03abdbfd0401ecdf3628433e"
  },
  {
    "url": "inline.7cd127b78f6f86fe238b.bundle.js",
    "revision": "4b1823381086925b4d04cc30133ae4fb"
  },
  {
    "url": "main.66ee02c4ecc6e7c3a126.bundle.js",
    "revision": "f7da8eef6b06689407db2870387f8a26"
  },
  {
    "url": "polyfills.28adfffe785267d138e7.bundle.js",
    "revision": "ad4076ac41e8c08e5b5f872136081192"
  },
  {
    "url": "vendor.6ecbcddaf530bcfe7e13.bundle.js",
    "revision": "af7207f469868db5240efc48441a9807"
  },
  {
    "url": "styles.bc14a0e3da7bac899284.bundle.css",
    "revision": "bc14a0e3da7bac89928461aa13deae24"
  },
  {
    "url": "assets/avatar.png",
    "revision": "bda9b390221c6fd0e98869cca64cfa25"
  },
  {
    "url": "assets/sda-control.svg",
    "revision": "7c6ac1a4d214dad88548deb55572c2a3"
  },
  {
    "url": "assets/super-store.svg",
    "revision": "8df0df15b5f843c322ac92e58e34fcce"
  },
  {
    "url": "assets/games/captain.jpg",
    "revision": "592fadaed0f6733746e9b80cf22afd54"
  },
  {
    "url": "assets/games/cdino.png",
    "revision": "20633b39dd474e3dc772140c395e94e1"
  },
  {
    "url": "assets/games/final-fight.jpg",
    "revision": "09df5c429e9f36d36cd1fd71d650aee0"
  },
  {
    "url": "assets/games/fzero.jpg",
    "revision": "32f24b1f5432b269b22c006355c8b1b7"
  },
  {
    "url": "assets/games/mario.jpg",
    "revision": "8696e995a1b0c46c204100681cd226dc"
  },
  {
    "url": "assets/games/megaman.png",
    "revision": "d946b148aa9b3fb6315637cf3519cc8c"
  },
  {
    "url": "assets/games/metal-gear.jpg",
    "revision": "565b0089d685460efa8a72c9f9906f3a"
  },
  {
    "url": "assets/games/mortal-kombat.jpg",
    "revision": "df65bfd138fcd7c1eba21a3f1956f726"
  },
  {
    "url": "assets/games/street-fighter.jpg",
    "revision": "ededc61895683e62a556814cd86015ff"
  },
  {
    "url": "assets/games/topgear.jpg",
    "revision": "0559335f257af6d2a20d09986a43974b"
  },
  {
    "url": "manifest.json",
    "revision": "c13c50e6ae7e3765e05a736bde790b76"
  },
  {
    "url": "?utm_source=pwa",
    "revision": "00637270d61fb64961f48ae9bbe21b91"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
