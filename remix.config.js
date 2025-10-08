/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: {
    modules: {
      events: true,
      stream: true,
      crypto: true,
      util: true,
      buffer: true,
      process: true,
      fs: true,
      path: true,
      url: true,
      querystring: true,
    },
  },
};