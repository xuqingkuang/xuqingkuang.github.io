/* Default config for develope enviroment */
let config = {
  /* The app placed path prefix, for development server, it used '/' by default,
   * For github demo page, it will changed to 'react-redux-boilerplate'.
   */
  urlPrefix: '/',

  /* React router history backend */
  historyBackend: 'browserHistory',

  /* Date format */
  dateFormat: 'MM/DD/YYYY',
  dateTimeFormat: 'MM/DD/YYYY HH:mm:ss',

  /* LeanCloud */
  leanCloud: {
    id: 'M6aE66SXQDQozwy03VW1QqaL',
    key: 'uankVhucrkGdmdWo9jNFDE8V'
  },

  /* SiteMaster tracking */
  siteMaster: {
    siteId: null
  },
  
  /* Static url prefix */
  staticPrefix: 'http://f.kxq.io'
}

/* Construct configs from environment */
if (process && typeof process.env.NODE_ENV !== 'undefined') {
  Object.assign(config, require(`./${process.env.NODE_ENV}`).default);
}

/* Freezed the config object, make it not able to be modified */
Object.freeze(config);

/* Export config */
export default config;
