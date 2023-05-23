/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'

clientsClaim()

/**
 * We are not wrapping it in a 'message' event as per the new update.
 * @see https://developers.google.com/web/tools/workbox/modules/workbox-core
 */
self.skipWaiting()

/**
 * Precache all of the assets generated by your build process.
 * Their URLs are injected into the manifest variable below.
 * This variable must be present somewhere in your service worker file,
 * even if you decide not to use precaching. See https://cra.link/PWA
 */
precacheAndRoute(self.__WB_MANIFEST)

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
// @see https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
)

// Cache the underlying font files with a cache-first strategy for 1 year.
// @see https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts
registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
  })
)

/**
 * Move api.
 *
 * Caches at: runtime
 */
registerRoute(
  ({ url }) =>
    url.origin === 'https://api.themoviedb.org' &&
    url.pathname.startsWith('/3/discover/tv'),
  new StaleWhileRevalidate({
    cacheName: 'movie-api-response',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({ maxEntries: 1 }) // Will cache maximum 1 requests.
    ]
  })
)

/**
 * We use CacheFirst for images because, images are not going to change very often,
 * so it does not make sense to revalidate images on every request.
 *
 * @see https://developers.google.com/web/tools/workbox/guides/common-recipes#caching_images
 */
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
)

// @see https://developers.google.com/web/tools/workbox/guides/common-recipes#cache_css_and_javascript_files
registerRoute(
  ({ request }) =>
    request.destination === 'script' || request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources'
  })
)
