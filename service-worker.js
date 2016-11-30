/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","f624bcd2db10994a130932176f50f856"],["/bower_components/app-layout/app-drawer/app-drawer.html","42374b7d1dc355271661d03f36f1b362"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","19b611bbac046ded73c13b8410652376"],["/bower_components/app-layout/app-header/app-header.html","4e0611f70434dc5d84af18a0e9779231"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","164f065b476fc80bb0832895a64d9690"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","47ef4a1229fe38f7ebb0b846676908c9"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","3c7625771a0962ff8a7def697886b0ce"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","6553a3c7f1835eedd09b2d4191201908"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","d239c76a7e08db3fc8f46eebbc3155f3"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","ab168337b6ea4e8f54205c02da76f0ec"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","25617f66cc34a1af275d409d045330ea"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","6b961c1529177272fe086bb56ce72a39"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","8819a9e809201c5ba3d2d40403ede42a"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","552919ee78264a99ff1d3c3b5910d31b"],["/bower_components/app-layout/helpers/helpers.html","76e084f8a0e1add6843d20d376ecf1f4"],["/bower_components/app-route/app-location.html","9052397b983d288303c6efe539606113"],["/bower_components/app-route/app-route-converter-behavior.html","2c9b3ff13a631bf794eb47add6a74458"],["/bower_components/app-route/app-route.html","ec9942b5cc7b8ecf337712246403e968"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","298da29f86055cf03a05254d7576465b"],["/bower_components/iron-ajax/iron-ajax.html","fa31b950b374aec627e9ca5ab59febf5"],["/bower_components/iron-ajax/iron-request.html","753b3352306644057defbac8c11072ab"],["/bower_components/iron-behaviors/iron-button-state.html","28ebfe02b0f1e8e3a7bef827a23fa374"],["/bower_components/iron-behaviors/iron-control-state.html","d2564a7127188bb0bcce3d719ba65529"],["/bower_components/iron-flex-layout/iron-flex-layout-classes.html","910c3181d5d32a2d173952fe960e3237"],["/bower_components/iron-flex-layout/iron-flex-layout.html","c84f73133ad49e771c68e95c155fb061"],["/bower_components/iron-icon/iron-icon.html","ceb6cba7f46d40e638cc17558eb3e958"],["/bower_components/iron-icons/iron-icons.html","f167b940536136378cba6ddbc6bb00d0"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","697ec822fe829a3c382e555e8259bf70"],["/bower_components/iron-list/iron-list.html","6369b642a278d08430e70a91174c4483"],["/bower_components/iron-location/iron-location.html","c314b97c8f222e336ade1ab7bb6a06a8"],["/bower_components/iron-location/iron-query-params.html","f4b226ba8a80951b1a580f98ea214601"],["/bower_components/iron-media-query/iron-media-query.html","1f6599b427468e7c4ce6a0c7a6d68709"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","62cf3ac7f51f26a12b800644ef1df768"],["/bower_components/iron-menu-behavior/iron-menubar-behavior.html","6a69be36fd4a249ad94337059d4b9c33"],["/bower_components/iron-meta/iron-meta.html","a01967fda8d42f3e63adc1c2e3945be3"],["/bower_components/iron-pages/iron-pages.html","58c990ebb0677e50f7658ff95b7d702a"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e9131c25c25968c88b5f7c0f4300e2e7"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","65b3b395474476e36c9174645fcf66e9"],["/bower_components/iron-selector/iron-multi-selectable.html","4c3924e1d92c72b86343c0d160d1e268"],["/bower_components/iron-selector/iron-selectable.html","bd348105f7ab0f112c80d182697f823a"],["/bower_components/iron-selector/iron-selection.html","a35d01bb93772ecc27e1037e8f027193"],["/bower_components/iron-selector/iron-selector.html","b16e67c27ef856b12149a467cc5223b0"],["/bower_components/marked-element/marked-element.html","2a1c686d1185a0408f2eb89215623fec"],["/bower_components/marked-element/marked-import.html","29737e5b52c7e8f16cd1de76869fa688"],["/bower_components/marked/lib/marked.js","b9a9fac18fda6dad4bafaf5be4d0783e"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","75f48b041a91699a40bf2dac12fd4f03"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","ac5cdb37beb1aef31f3bfb72fbfa5d63"],["/bower_components/paper-icon-button/paper-icon-button.html","b70305a74e0c46546eea30e1ee842fcc"],["/bower_components/paper-material/paper-material-shared-styles.html","5ffed888ebf4d91973b4d13e0325aada"],["/bower_components/paper-material/paper-material.html","061b4f35df8aa13d7ef3f71106715f86"],["/bower_components/paper-ripple/paper-ripple.html","15ddf86f638c406418c3054ea9fde15b"],["/bower_components/paper-styles/color.html","7e7b6c4b6df20d684db1c1f9d75485b0"],["/bower_components/paper-styles/default-theme.html","356001e16dc2f911f8faeff659c61abb"],["/bower_components/paper-styles/shadow.html","3de212121d13169e7b1a8b2872446330"],["/bower_components/paper-tabs/paper-tab.html","6dfe70aeaf0435546663362aba48bbaa"],["/bower_components/paper-tabs/paper-tabs-icons.html","f8e9e4ba00752fc54f1046143ba1be28"],["/bower_components/paper-tabs/paper-tabs.html","b602e2edc47a58fd9cf4cb17c842cef2"],["/bower_components/polymer/polymer-micro.html","a71961375d71aeec78ca9ac2e405efc1"],["/bower_components/polymer/polymer-mini.html","4e733fca92b310689d46724b7e125156"],["/bower_components/polymer/polymer.html","6584ceb7d7785a3c18673cd563bae3a6"],["/bower_components/promise-polyfill/Promise.js","d64797afd60b82e98a19f8177444e27d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","5cd73b659ecf9c535a5ae5f2254557a7"],["/index.html","fd0b97b5f0bb6eb74eee9088c0d234a2"],["/src/blog-post.html","894606827d3283d05710d3649e907547"],["/src/portfolio-card.html","0e2f8d87f4b70b9ffc5e7b902f07f83c"],["/src/shared-styles.html","61345be6756b7c9b6918cae4368648fb"],["/src/showcase-app.html","af4e043df06c3a794735d97912dc3d2f"],["/src/showcase-blog.html","783b51836c561aff61cafac53a06ef9a"],["/src/showcase-home.html","36cd6d964c02be9cf81edf0a61237e69"],["/src/showcase-portfolio.html","d0168dfea831e25de9df9533e1c882f3"],["/src/showcase-resume.html","e9d026d1bc5fc3ac2727126c96a177cd"],["/src/showcase-view404.html","aae4f33d050a86bad5e83b75637b5e23"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




