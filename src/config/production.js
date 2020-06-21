/* Config for production enviroment */

const config = {
  /*
   * 'public' url prefix is use for `gulp production` static files testing,
   * comment these lines because they are not in using so far.
   */
  // urlPrefix: '/public/',
  historyBackend: 'hashHistory',

  /* SiteMaster tracking */
  siteMaster: {
    siteId: '24b0e3b'
  },

  /* Static url prefix */
  staticPrefix: 'https://raw.githubusercontent.com/xuqingkuang/xuqingkuang.github.io/master/imgs/'
}

export default config;
