/* Default config for develope enviroment */
let config = {
  /* The app placed path prefix, for development server, it used '/' by default,
   * For github demo page, it will changed to 'react-redux-boilerplate'.
   */
  urlPrefix: '/',

  /* React router history backend */
  historyBackend: 'hashHistory',

  /* Date format */
  dateFormat: 'MM/DD/YYYY',
  dateTimeFormat: 'MM/DD/YYYY HH:mm:ss',

  /* LeanCloud */
  leanCloud: {
    id: 'VJTLTeDQmhB6DjTocJOafwCa-MdYXbMMI',
    key: 'IkwXs9heg4Rekq8sVRTrbTDe',
    serverUrl: 'https://leancloud.kxq.io',
  },

  /* SiteMaster tracking */
  siteMaster: {
    siteId: null
  },
  
  /* Static url prefix */
  staticPrefix: 'http://o8gb937mp.bkt.clouddn.com'
}

/* Construct configs from environment */
if (process && typeof process.env.NODE_ENV !== 'undefined') {
  Object.assign(config, require(`./${process.env.NODE_ENV}`).default);
}

/* Freezed the config object, make it not able to be modified */
Object.freeze(config);

/* Export config */
export default config;
