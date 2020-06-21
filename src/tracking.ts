const pageview = (pathname) => {
  return [
    // 固定的名称，取决于sitemater的规则约定
    'pageview',

    //页面路径，只去pathname和路由的部分，去掉querystring
    pathname,

    // 页面标题
    document.title
  ]
}

export default (siteId, history) => {
  if (!siteId) {
    return false
  }
  setTimeout(() => {
    // 初始化 _smq
    const _smq = (() => {
      let _smq = window._smq = window._smq || [];
      _smq.push(['_setAccount', siteId, new Date()]);

      let sm = document.createElement('script');
      sm.type = 'text/javascript';
      sm.async = true;
      sm.src = `${document.location.protocol}//cdnmaster.com/sitemaster/collect.js`;
      let s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(sm, s);
      return _smq;
    })();

    // 监听 URL 变化
    history.listen((location) => {
      _smq.push(pageview(location.pathname));
    });
  }, 2000);
}
