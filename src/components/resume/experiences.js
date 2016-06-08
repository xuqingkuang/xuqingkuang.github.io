import React from 'react';
import { Row, Col, Card } from 'antd';
import ProjectCard from './project-card';

export default ({id}) => {
  return (
    <div id={id}>
      <h2>工作和项目经历</h2>
      <article>
        <h3>
          2015年12月－至今
          &nbsp;
          <a href="http://www.yushanfang.com/">阿里巴巴集团</a>
          &nbsp;
          商家业务部网站工程/高级前端工程师
        </h3>
        <section>
          经人介绍，来到了阿里巴巴，该公司的第一感受确实和之前公司不太一样，
          首先是每个人都特别聪明能干，关键是这帮比自己聪明的人，还都比自己努力。
        </section>
        <section>
          到目前为止，在这里主要完成了三件事情：
        </section>
        <section>
          一、完成了 BI 工具的反向代理，将原来暴露在外网的 BI 集群封闭到防火墙之内，
          所有 BI 工具通过反向代理与客户端通讯，提升了安全性，
          因为反向代理具备缓存功能，也间接提升了服务性能。反向代理通过 Nginx 实现，
          该项目主要是实现了一套 Nginx 配置自动更新机制，可以自动获取 Qlik 集群的机器列表，
          并且生成配置文件。难点在于目前的 BI 工具使用了 WebSocket 长连接和 NTLM 用户认证，
          当时为了解决这两个特殊的协议代理花费了不少的时间。
        </section>
        <section>
          二、成为智库版本拆分项目 PM 和主程序员，带领3位前端、3位后端、2位测试一起，
          将一个现存项目，从界面上拆分为两个版本，还是一个应用，
          但是根据用户所购买的版本拥有了有三套不同的界面，
          技术上最大的挑战在于要为原来应用里的路由表（每个 URL 所映射的方法）增加一个版本检查，
          确定当前的 URL 所属于哪个版本。管理上采取了将
          <a href="./imgs/products/gannt.png">
          任务细分
          </a>，精确到每天的计划和跟踪，
          保证了项目的顺利完成。拆分版本后提升了用户细分能力，
          为有不同需求的客户提供了更加专业化的服务。
        </section>
        <section>
          三、数据银行粉丝趴项目中的
          <a
            href="http://kuangxuqing.qiniudn.com/products/fansparty.png" 
            target="_blank"
          >
            关注用户画像
          </a>界面整体实现，粉丝趴是天猫中类似淘宝的微淘，但是转变为粉丝运营，
          天猫大客户有需求知道具体的用户情况，因此产生了粉丝趴项目，该页面由五个图表构成，
          主要是为了了解一年内粉丝趴内的用户情况，分析出了新客、老客、潜客的总体、年龄、
          地域分布。该项目使用了一系列的新技术，首先是之前 React + Redux 的积累在此得到应用，
          图表展示使用了 ECharts，界面使用了蚂蚁金服的 Ant Design，
          前端到服务器的请求采用了新的 fetch，配合 ES7的 async 和 await
          封装出了一套符合业务的服务器请求 API。另外，我继续为它匹配了
          <a 
            href="http://kuangxuqing.qiniudn.com/products/fansparty-mobile.png"
            target="_blank"
          >
          手机的分辨率
          </a>。
        </section>
        <section>
          如果说在 AdMaster 还受到旧项目的牵绊的话，新的技术只能自己尝试，
          在阿里这个拥抱变化的环境，可以一次性把自己所知、所准备的东西全部用上。
        </section>
      </article>
      <article>
        <h3>
          2013年1月－2015年11月
          &nbsp;
          <a href="http://www.admaster.com.cn/">精硕世纪科技（北京）有限公司</a>
          &nbsp;
          研发部/高级前端工程师
        </h3>
        <section>
          在此工作期间，负责了
          <a href="http://www.trackmaster.com.cn/">
            互联网广告分析工具 TrackMaster&nbsp;
            <span className="print-link print-only">[www.trackmaster.com.cn]</span>
          </a>
          &nbsp;的主要研发工程师，负责了 V5 版本的数据银行、以及 V6 的项目、广告位管理功能开发，
          参与了分析报告部分功能的开发，同时参与了视频广告监测 Snap 产品的前期研发工作，
          因为出色的工作能力，职称从 T4 升职到 T5，同时成为了
          <a href="https://site.admaster.com.cn">
            站点监测工具 SiteMaster&nbsp;
            <span className="print-link print-only">[site.admaster.com.cn]</span>
          </a>
          &nbsp;的前端负责人，接手后第一件工作，便是为现有系统增加权限控制功能，
          颗粒度达到了单个页面某个功能的 CRUD 权限可控制，但是现存系统缺乏 session 共享模块，
          View 和 Model 的启动方式也有问题，为此对整个前端工程进行了重构。
        </section>
        <section>
          期间，学习、研究、掌握了现代的前端开发方式，TrackMaster 和 SiteMaster
          都是基于 Backbone 单页面应用，使用 CoffeeScript 开发，通过 grunt 进行编译。
          同时，做了大量前端组件的积累和各种新技术的调研，以下是部分产出。
        </section>
        <Row gutter={16} className="products">
          <Col xs={24} lg={8} className="product gutter-box">
            <ProjectCard
              title="simple-pinyin"
              project="http://github.com/xuqingkuang/simple-pinyin"
              example="http://kxq.io/simple-pinyin/test.html"
            >
              <section>
                一个简单的汉字转换成拼音的工具，本来是为了给 select2 提供拼音搜索的能力，
                因为做得足够简单，使它可以适合任何一个提供了搜索接口的场合。
              </section>
              <section>
                该项目特别简单，使用了一个简单的 Unicode 库进行比对，性能不错，传入中文字符，
                即可输出完整拼音，和拼音首字母组成的简拼，
                这样它能够进行汉字首字母和完整汉字拼音的匹配。
              </section>
            </ProjectCard>
          </Col>
          <Col xs={24} lg={8} className="product gutter-box">
            <ProjectCard
              title="bootstrap-dual-select"
              project="http://github.com/xuqingkuang/bootstrap-dual-select"
              example="http://kxq.io/bootstrap-dual-select/index.html"
            >
              <section>
                非常方便的穿梭框生成工具，从普通的 seleect 元素上即可构建左右两列的穿梭选择框，
                支持全选、全不选、双击选中，可以随时构建随时销毁。
              </section>
            </ProjectCard>
          </Col>
          <Col xs={24} lg={8} className="product gutter-box">
            <ProjectCard
              title="clonableView"
              project="http://github.com/xuqingkuang/clonableView"
              example="http://kxq.io/clonableView/test.html"
            >
              <section>
                开发过程中经常会碰到那种，需要给某个元素提供 ＋、－ 按钮，
                提供克隆或者销毁功能，这个组件就是为了解决这个问题，它提供了一套容器，
                把需要克隆的元素套进去便自动增加了 ＋、－ 两个按钮，
                可以很轻松地实现需要的功能。
              </section>
              <section>
                PS: 该组件开发比较早，还是匹配 Bootstrap 2。
              </section>
            </ProjectCard>
          </Col>
        </Row>
        <Row className="products">
          <Col xs={24} className="product">
            <ProjectCard
              title="react-redux-boilerplate"
              project="http://github.com/xuqingkuang/react-redux-boilerplate"
              example="http://kxq.io/react-redux-boilerplate"
            >
              <section>
                在 React 兴起之初，我便已经开始对它进行研究，为了更好的学习它的理念，
                以最小的代码量实现了三套应用模板，包含了 CoffeeScript + Reflux 方案、
                Babel + Reflux 方案，到最后只留下了 Babel + Redux 方案，
                这也是目前绝大多数开发者最常见的选择。
              </section>
              <section>
                该项目从 React 0.12 开始便一直跟踪着最新版本的动态，每一个模块都是自己查找、
                选择，每一行代码都是自己编写，很清楚所选择模块的意义和价值，
                每周都会去检查社区内各个模块的动态，并且将合适的模块加入。
              </section>
              <section>
                该项目完全去除了 jQuery 的依赖，使用 Babel 进行到 ES5 的编译，
                同时引入了 Jest 单元测试框架和 travs-ci 进行前端持续集成 ，
                力求能够在商业产品中进行应用。
              </section>
              <section>
                在这个项目中的收获直接应用到阿里的粉丝趴项目，目前对它的计划是进行扩展，
                之前是最简化的编译、发布、测试系统，未来将整合一套界面框架和图表，
                进化为一套 Dashboard 模板。
              </section>
              <section>
                PS: 本人博客和该简历，也是基于该 React + Redux 模板开发的。
              </section>
            </ProjectCard>
          </Col>
        </Row>
      </article>
      <article>
        <h3>
          2011年2月－2012年12月
          &nbsp;
          <a href="http://www.thundersoft.com/">中科创达软件股份有限公司</a>
          &nbsp;
          战略产品部/产品经理
        </h3>
        <section>
          需要声明：当时入职的是战略产品部，该部门目标是进行移动领域的新技术调研，
          依然是研发性质的工作。
        </section>
        <section>
          在那里接触到了各种移动端开发技巧、媒体适配、尝试了 Hybrid 应用，
          并且继续通过数据可视化方案，提供了公司内各类数据展示。
        </section>
      </article>
      <article>
        <h3>
          2008年10月－2011年1月
          &nbsp;
          <a href="https://www.redhat.com/en">红帽软件（北京）有限公司</a>
          &nbsp;
          测试部/软件测试工程师
        </h3>
        <section>
          需要声明：当时 Red Hat 在国内技术只有测试部门，所有人的 Title 都是测试工程师，
          但是我属于一个特殊的工具开发组，为测试工程师开发工具，
          在那里使用 Python/Django 进行工具开发，也是在那里，接触的网站开发内容，
          接触到各种报表，接触到真正流程化的测试，外企在管理、流程和测试精细度上让我叹为观止。
        </section>
        <section>
          在 Red Hat，从头开发了
          <a href="https://github.com/Nitrate/Nitrate/">
            手动测试工具 Nitrate&nbsp;
            <span className="print-link print-only">
              [github.com/Nitrate/Nitrate]
            </span>
          </a>
          &nbsp;和自动化测试工具 virtLab，这两个项目从一开始就是由我一人独自开发，
          前后端都包揽，在那个过程中一边学习一边开发，积累了大量开发经验，
          熟悉了整个手工和自动化测试流程，并且通过测试结果报表，入门了数据可视化。
        </section>
        <section>
          外企拥有良好的培训教育机制，在当时顺手再次拿下了 RHCE 和 Certificated Scrum
          Master 认证。
        </section>
      </article>
      <article>
        <h3>
          2004年10月－2008年9月
          &nbsp;
          <a href="http://www.redflag-linux.com/">中科红旗软件技术有限公司</a>
          &nbsp;
          桌面产品研发部/软件工程师
        </h3>
        <section>
          主要负责红旗 Linux 桌面和服务器版的开发，和西藏大学合作完成了藏文版本，
          在中科院计算所，和他们一起，完成了龙芯 MIPS 版本的红旗 Linux 系统。
        </section>
        <section>
          在此的工作经历让我从代码层面重新审视了一下 Linux 系统，
          和之前作为用户的视角是完全不一样的。
        </section>
      </article>
    </div>
  );
}
