self.__uv$config = {
  prefix: '/service/',
  encodeUrl: (url) => url, 
  decodeUrl: (url) => url, 
  handler: '/uv/uv.handler.js',
  client: '/uv/uv.client.js',
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv/uv.sw.js',
};

(function () {
  const params = new URLSearchParams(location.search);
  const rawUrl = params.get("url");

  if (rawUrl && !params.get("auth")) {
    history.replaceState(null, "", `${location.pathname}?auth=${encodeURIComponent(rawUrl)}`);
  }
})();
