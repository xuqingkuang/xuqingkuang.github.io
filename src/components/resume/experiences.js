import React from 'react';
import { Row, Col, Card } from 'antd';
import ProjectCard from './project-card';
import { staticUrl } from '../../utils';

export default ({id}) => {
  return (
    <div id={id}>
      <h2>工作和项目经历</h2>
      <article>
        <h3>
          2015年12月－至今
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
          3、在团队内推广了 React、Redux、Docker 等新技术。
        </section>
        <section>
          4、实现了 BI 项目的安全性提升，通过两层反向代理监测、控制了 BI 项目的数据传输。
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
          <a href="http://www.thundersoft.com/">中科创达（300496）</a>
          战略产品部/全栈工程师
        </h3>
        <h4>工作描述</h4>
        <section>
          创达是手机系统集成商，我在该公司主要参与 Web 的后端和前端服务相关开发工作。
        </section>
        <h4>主要业绩</h4>
        <section>
          1、期间掌握了移动端开发技巧和各种媒体适配；
        </section>
        <section>
          2、与 Intel 协作，完成了 Tizen 手机 Web App 的 IDE 工程 Rapid Interface
          Builder，该项目可以算是最早的单页面应用，基于 jQuery Mobile，实现了拖拽控件、
          编写 Javascript 实现了 Tizen Web App 的简单开发模式。
        </section>
        <section>
          3、完成了创达云，为移动设备提供了包含基础的云存储、云定位、云备份等基础服务。
        </section>
        <section>
          4、成为一位硕士生的副导师，协助完成了毕业论文。
        </section>
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
          为测试人员，开发手工和自动测试工具，为领导提供测试结果报表。
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
      </article>
      <article>
        <h3>
          2004年10月－2008年9月
          &nbsp;
          <a href="http://www.redflag-linux.com/">中科红旗软件技术有限公司</a>
          &nbsp;
          桌面产品研发部/软件工程师
        </h3>
        <h4>工作描述</h4>
        <section>
          红旗 Linux 是个操作系统集成商，基于 Red Hat Linux 进行本土化、个性化的开发，
          我在该公司参与了多个系统关键组件的研发，以及系统集成工作。
        </section>
        <h4>主要业绩</h4>
        <section>
          1、和中科院软件所一起，完成了龙芯的 MIPS 版本的 Red Flag Linux 社区版研发。
        </section>
        <section>
          2、和西藏大学一起，完成了藏文版本的 Red Flag Linux 版本研发，该项目的主要实现了
          GB18030 编码的藏文扩充。
        </section>
      </article>
    </div>
  );
}
