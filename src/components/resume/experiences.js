import React, { PropTypes } from 'react';
import { Row, Col, Timeline } from 'antd';
import ProjectCard from './project-card';
import { staticUrl } from '../../utils';
import Recommendations from './recommendations';

const Experiences = ({id}) => {
  return (
    <div id={id}>
      <h2>工作和项目经历</h2>
      <article>
        <h3>
          2016年8月8日-至今
          &nbsp;
          <a href="//www.tencent.com">腾讯（HK.700）</a>
        </h3>
        <h4>工作描述</h4>
        <section>
          主职：
        </section>
        <section>
          <b>PCG平台与内容事业群/腾讯看点/品类研发中心/基础架构组/高级前端开发</b> - 腾讯跨端中台项目 Hippy 前端负责人，对接各个业务，协调移动端进行功能开发，并保证双端功能一致性。
        </section>
        <section>
          兼职：
        </section>
        <section>
          <b>总办/技术委员会/对外开源管理办公室/Hippy PMC/委员</b> - 协调公司内部中台项目的协作开发，目前 PMC 成员主要包含了 TME 全民 K 歌和 CDG 自选股部门等共 15 位成员。
        </section>
        <section>
          <b>PCG平台与内容事业群/PCG技术负责人联席会议/PCG代码委员会/理事</b> - 由 PCG 研发部经理 winton 指派的组织，主要进行制定、宣传、教育腾讯 JavaScript 代码规范，制定培训课程，组织晋升答辩时的代码评审工作。最终目标是为了提升整个公司的编码开发水平。
        </section>
        <section>
          <b>S1职能系统－职能线/腾讯研究院/大数据中心/大数据中心研究员</b> - 腾讯大数据数据可视化方向、以及图形交互的研究。
        </section>
        <h4>主要业绩</h4>
        <section>
          在工作期间，因能力出色获得了<a href={staticUrl("/rewards/tencent-rewards.jpg")}>大量奖项</a>，主要有：
        </section>
        <Timeline>
          <Timeline.Item>2017、2018、2019三次绩效突出奖</Timeline.Item>
          <Timeline.Item>2017年年度腾讯微创新奖</Timeline.Item>
          <Timeline.Item>2018年下半年腾讯新代码文华奖</Timeline.Item>
          <Timeline.Item>2018年下半年腾讯开源协作奖</Timeline.Item>
          <Timeline.Item>2018年腾讯新代码文化奖</Timeline.Item>
          <Timeline.Item>2019年腾讯代码委员会特别贡献奖</Timeline.Item>
        </Timeline>
        <Row className="products">
          <Col xs={24} className="product">
            <ProjectCard
              title="Hippy"
              project="http://github.com/Tencent/Hippy"
            >
              <section>
                Hippy 本来是腾讯 QQ 浏览器基于 React Native 0.27 进行二次开发的跨端框架。
                我于2018年3月全面负责前端框架部分。主要工作是负责前端部分框架、文档、范例的开发，新需求、bug 的分工，
                并协调移动端功能开发和双端功能一致性的统一。
              </section>
              <section>
                接手后首先是开发了 <a href="//hippyjs.org/#/hippy-vue/introduction">hippy-vue</a>，
                该项目的难点在于底层完全是 RN 的设计，为此基于 Vue 的 node-ops DOM
                操作接口重新实现了对实际节点的操作，
                并重新实现了 CSS 解析器以提供对各种样式以及选择器的支持。
              </section>
              <section>
                其次是重新开发了 <a href="//hippyjs.org/#/hippy-react/introduction">hippy-react</a>，
                早期 Hippy 使用的是基于 React-DOM 15 的源代码进行魔改，主要是无法扩展问题，
                React Hooks 等新特性完全无法使用。而后基于 Facebook 官方的 react-reconciler 重新实现了渲染层以进行支持。
              </section>
              <section>
                目前在公司内部有20个业务都进行了接入，每日的 UV 过亿。在开发过程中对 React 和 Vue 两大 MVVM 的内部工作原理都进行了非常深入的了解。
              </section>
              <section>
                经过不懈努力，推动了该项目在2019年12月对外开源，在开源之前重新整理了所有代码、文档、范例，并建立起了一整套自动化测试、代码审核和准入制度等等。
                开源后积极进行宣传，通过于腾讯云社区合作的方式让该项目首周 Star 数破 2k，目前是 4.8k 的总 Star 数，截止目前用户 QQ 群用户 568 人。
              </section>
            </ProjectCard>
          </Col>
        </Row>
      </article>
      <article>
        <h3>
          2015年12月－2016年8月5日
          &nbsp;
          <a href="http://www.yushanfang.com/">阿里巴巴集团（BABA）</a>
          商家业务部网站工程/高级前端工程师
        </h3>
        <h4>工作描述</h4>
        <section>
          商家业务部是为天猫大客户提供数据服务和营销指导的部门，
          在司期间成为了智库产品的前端负责人，该产品为客户提供了多元化的数据报表为营销提供指导，
          并且成为了 BI 项目组的成员，该项目从数据的视角，提供了更多维度来审视营销情况。
        </section>
        <h4>主要业绩</h4>
        <section>
          1、成为智库产品版本拆分任务的PM，带领3位前端、3位后端、2位测试和2位 UED 一起完成，
          将智库产品根据不同的用户需求，拆分为电商版和营销版，前者为普通电商提供服务，
          而后者提供了更佳多元化的营销预测和实施方案。该项目动用人力浩大、
          但在两周之内便将产品完成了一期拆分上线，这得益于精确到天的计划和任务跟踪，
          和及时的问题反馈、解决；
        </section>
        <section>
          2、完成了智库产品粉丝趴项目，淘宝中有个微淘，而天猫打算类似的产品，但专注于粉丝营销，
          因此推出了粉丝趴，由此产生了数据需求，该项目提供了粉丝趴用户的详细分层数据展示；
        </section>
        <section>
          3、实现了 BI 项目的安全性提升，通过两层反向代理监测、控制了 BI 项目的数据传输。
        </section>
        <section>
          4、在团队内推广了 React、Redux、Docker 等新技术，并且积累出部分组件。
        </section>
        <h4>主管评价</h4>
        <Recommendations id="recommendations" />
        <Row gutter={16} className="products">
          <Col xs={24} lg={12} className="product gutter-box">
            <ProjectCard
              title="react-tour-guide"
              project="https://github.com/xuqingkuang/rc-tour-guide"
              example="http://kxq.io/rc-tour-guide/examples/position.html"
            >
              <section>
                一个比 Intro.js 还棒的新手向导组件，为 React 设计的 Component，
                不侵入原来的 Componet 设计，可以无缝对接各种 Component。
              </section>
              <section>
                增加了更多参数和选项，更佳灵活，而且实际只用了1000出头的行数，只有
                Intro.js 的一半大小。
              </section>
            </ProjectCard>
          </Col>
          <Col xs={24} lg={12} className="product gutter-box">
            <ProjectCard
              title="rc-wizard"
              project="https://github.com/xuqingkuang/rc-wizard"
              example="http://kxq.io/rc-wizard/examples/simple.html"
            >
              <section>
                一个试用极其简单，功能极其强大的向导生成 Component。
              </section>
              <section>
                特点是可以直接使用 JSX 的语法嵌入 Component，更佳优雅。
              </section>
            </ProjectCard>
          </Col>
        </Row>
      </article>
      <article>
        <h3>
          2013年1月－2015年11月
          &nbsp;
          <a href="http://www.admaster.com.cn/">精硕世纪科技（北京）有限公司</a>
          &nbsp;
          研发部/高级前端工程师
        </h3>
        <h4>工作描述</h4>
        <section>
          AdMaster 是业内知名的互联网广告投放监测公司，我在司期间主要负责了主力盈利产品
          TrackMaster 的开发工作，并且成为了站点监测工具 SiteMaster 的前端负责人，
          带领另外三位同事一起完成产品开发，并且对他们的绩效进行考核。
        </section>
        <h4>主要业绩</h4>
        <section>
          1、因为出色的工作能力，职称从 T4 升级到 T5。
        </section>
        <section>
          2、负责了广告分析工具 TrackMaster V5 数据银行和 V6 项目管理和部分分析报告的开发；
        </section>
        <section>
          3、参与了视频广告监测 Snap 产品的前期研发工作；
        </section>
        <section>
          4、成为了站点监测工具 SiteMaster  的前端负责人，接手后第一件工作，便是为现有系统增加权限控制功能，颗粒度达到了单个页面某个功能的 CRUD 权限可控制。
        </section>
        <section>
          5、期间，学习、研究、掌握了现代的前端开发方式，TrackMaster 和 SiteMaster 都是基于 Backbone 单页面应用。
        </section>
        <section>
          6、在项目中积累了部分公用组件，并且将其开源，以下是其中部分：
        </section>
        <Row gutter={16} className="products">
          <Col xs={24} lg={8} className="product gutter-box">
            <ProjectCard
              title="simple-pinyin"
              project="http://github.com/xuqingkuang/simple-pinyin"
              example="http://kxq.io/simple-pinyin/"
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
                以最小的代码量实现了三套应用模板，包含了 Lint、单元测试。包含了 CoffeeScript + Reflux 方案、
                Babel + Reflux 方案、Babel + Redux 方案，目前是 Typescript + Redux 方案。
                这也是目前绝大多数开发者最常见的选择。
              </section>
              <section>
                该项目从 React 0.12 开始便一直跟踪着最新版本的动态，每一个模块都是自己查找、
                选择，每一行代码都是自己编写，很清楚所选择模块的意义和价值，
                每周都会去检查社区内各个模块的动态，并且将合适的模块加入。
              </section>
              <section>
                在这个项目中的收获直接应用到阿里的粉丝趴项目、腾讯的互联网+指数项目、医疗项目的在线问诊项目等等项目。
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
          <a href="http://www.thundersoft.com/">中科创达（300496）</a>
          战略产品部/全栈工程师
        </h3>
        <h4>工作描述</h4>
        <section>
          创达是手机系统集成商，我在该公司主要参与 Web 的后端和前端服务相关开发工作。
        </section>
        <h4>主要业绩</h4>
        <section>
          1、期间掌握了移动端开发技巧和各种媒体适配。
        </section>
        <section>
          2、外派到 Intel 参与一些桌面和移动项目开发。
        </section>
        <section>
          3、完成了创达云，为移动设备提供了包含基础的云存储、云定位、云备份等基础服务。
        </section>
        <section>
          4、成为一位硕士生的副导师，协助完成了毕业论文<a href="https://www.ixueshu.com/document/08a313525615c837759eb7935c1631c0318947a18e7f9386.html">《基于Django框架管理界面自动生成模块的设计与实现》</a>。
        </section>
        <Row className="products">
          <Col xs={24} className="product">
            <ProjectCard
              title="RIB"
              project="//github.com/intel/rib"
              example="//01.org/rapid-interface-builder"
            >
              <section>
              与 Intel 协作，完成了 Tizen 手机 Web App 的 IDE 工程 Rapid Interface Builder，该项目可以算是最早的单页面应用，
              基于 jQuery Mobile，实现了拖拽控件、编写 Javascript，实现了 Tizen Web App 的简单开发模式。
              我在其中主要负责代码编辑器的开发，在实现之前 RIB 只有控件的拖拽和属性编辑功能，代码编辑器进一步扩充了 RIB 的实用性，
              通过它实现负责复杂业务逻辑成为了可能。
              </section>
            </ProjectCard>
          </Col>
        </Row>
      </article>
      <article>
        <h3>
          2008年10月－2011年1月
          &nbsp;
          <a href="https://www.redhat.com/en">红帽软件（RHT）</a>
          &nbsp;
          测试工具研发部/全栈工程师
        </h3>
        <h4>工作描述</h4>
        <section>
          为测试人员，开发手工和自动测试工具，并提供测试数据报表。
        </section>
        <h4>主要业绩</h4>
        <section>
          1、独立开发手工测试工具&nbsp;
          <a href="https://github.com/Nitrate/Nitrate/">Nitrate</a>
          &nbsp;前后端，该工具使 RH
          的测试工作不再受到第三方测试工具的制约，完全根据自己的需求定制开发，
          相对于第三方测试工具提供了更佳完善的测试状态记录和测试报告，
          提供了更佳优秀的 UE/UI，使测试的同事效率得到提升。
        </section>
        <section>
          2、开发了自动化测试工具 virtLab，该工具底层通过调用 IBM STAF 远程执行测试脚本，
          通过 Puppet 进行测试集群部署，上层通过简单明了的界面，实现了测试集群机器状态的管理，
          以及测试脚本参数填写、运行，并且将测试结果收集之后，以测试覆盖率图表的形式进行展示。
          该项目解放了测试人员的工作量，把人从重复劳动中解脱了出来。
        </section>
        <Row className="products">
          <Col xs={24} className="product">
            <ProjectCard
              title="Nitrate"
              project="//github.com/Nitrate/Nitrate"
            >
              <section>
                基于 Python 上的 Django 框架实现了 <a href="https://developer.mozilla.org/zh-CN/docs/Mozilla/Bugzilla/Testopia">Testopia</a> 兼容的数据库结构和 XML-RPC 接口，
                但实现上 Clean Room 完全重写了全部功能，并做了大量增强。对外开源后虽然功能有所增加，但文件结构和架构依然如初。
              </section>
              <section>
                谢谢他们对外开源后保留了<a href="https://github.com/Nitrate/Nitrate/blob/develop/AUTHORS">作者名字</a>。
              </section>
            </ProjectCard>
          </Col>
        </Row>
      </article>
      <article>
        <h3>
          2004年10月－2008年9月
          &nbsp;
          <a href="http://www.redflag-linux.com/">中科红旗软件技术有限公司</a>
          &nbsp;
          桌面产品研发部/软件工程师
        </h3>
        <h4>相关报道：</h4>
        <section>
          <a href="http://tech.sina.com.cn/it/2005-06-13/1827634538.shtml">
            新浪 - 《18岁初中生入职中科红旗 Linux人才重视素质》
          </a>
          - 这篇报道并不属实，真实情况是我从 98 年开始接触 Linux，在 Linuxfans、Linux 伊甸园等社区中已经小有名气，
          2003年2月，我高二时趁着寒假期间来北京的银河网络教育中心考取 RHCE 的认证，
          但碰上非典爆发，考试暂停，全城戒严，无法回家，考试直到十月份才完成。
          在入职红旗之前一直在考试中心协助老师进行一些助教工作，一年之后才被同学推荐进入红旗面试。
        </section>
        <h4>工作描述</h4>
        <section>
          红旗 Linux 是个操作系统集成商，基于 Red Hat Linux 进行本土化、个性化的开发。
          我在该公司参与了多个系统关键组件的研发工作、以及社区运营和宣传。
        </section>
        <h4>主要业绩</h4>
        <section>
          <ul>
            <li>1、和中科院软件所一起，完成了龙芯的 MIPS 版本的 Red Flag Linux 社区版研发。</li>
            <li>2、和西藏大学一起，完成了藏文版本的 Red Flag Linux 版本研发，该项目的主要实现了 GB18030 编码的藏文扩充和输入法集成。</li>
            <li>3、组织建立了红旗的开发者交流社区 <a href="//linux-ren.org">Linux 人</a>（已经下线）。</li>
          </ul>
        </section>
      </article>
    </div>
  );
}

Experiences.propTypes = {
  id: PropTypes.string
}

export default Experiences;
