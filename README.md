# 关于我的博客

本博客是基于
[react-redux-boilerplate](https://github.com/xuqingkuang/react-redux-boilerplate)
开发的一套“云博客”，因为它确实没有自己的服务器。

目前用到了以下云服务，都是在一定程度下免费的：

* [Github pages](https://pages.github.com) - 静态 HTML、JS 文件存储。
* [LeanCloud](https://leancloud.cn/) - 供应博客内容。
* [Flickr](http://www.flickr.com)/[七牛](http://www.qiniu.com) - 博客图片之类的文件存储。

博客内容很久没有更新了，因为之前一直没有找到撑手的博客工具，所以才自己写了一份，功能还尚未完善，
打算先写好基本的展示页面，和我自己的 Github 作品页面，再做好基于后台云的用户鉴权、
和编辑功能，当然，这些都是偷偷的，等完成了之后会放出来作为单独的项目，希望到时候有人给我提 pull
request 吧。

因为 LeanCloud JavaScript SDK 的 IE 兼容性最低到 10，导致我这项目暂时无法兼容更低版本，
如果他们不打算解决的话，可能我会换别的云服务提供商。
