import * as React from 'react';
import { Popover, Modal, Button } from 'antd';
import { staticUrl } from '../../utils';
import '../../static/icons.css';

export default class Features extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: false,
      title: 'none',
      imageUrl: 'javascript:'
    }
  }

  handleCancel () {
    this.setState({ visible: false });
  }

  handleLinkClick (evt, title) {
    evt.preventDefault();
    const target = evt.currentTarget;
    const url = target.getAttribute('href');
    if (url.indexOf('.png') !== url.length - 4) {
      return window.open(url);
    }
    this.setState({
      visible: true,
      title: title || 'Certification',
      imageUrl: url
    });
  }

  render () {
    const { id } = this.props;
    const { visible, title, imageUrl } = this.state;

    const popoverContents = {
      nodejs: (
        <div>
          <p>NodeJS 提供了 Javascript 在服务器端运行的能力，</p>
          <p>使前后端开发能够保持统一。</p>
        </div>
      ),
      babel: (
        <div>
          <p>Babel 提供了将 ES6/7 的语法编译为 ES5 的能力，</p>
          <p>使新的语法可以在老旧浏览器上运行，</p>
          <p>和 webpack、gulp 一起构建了现代前端应用开发的基石。</p>
        </div>
      ),
      react: (
        <div>
          <p>数据视图双向绑定使前端开发从更新数据还需要操作界面元素中解脱出来，</p>
          <p>使界面更新自动化。</p>
        </div>
      ),
      antDesign: (
        <div>
          <p>类似于 Bootstrap 的组件库，蚂蚁金服出品，为 React 设计。</p>
        </div>
      ),
      echarts: (
        <div>
          <p>功能很棒而且性能很好的图表库，百度出品。</p>
        </div>
      ),
      github: (
        <div>
          <p>世界上最大的开发者交流社区，</p>
          <p>我之前参与过开源项目的研发，熟悉整个开源项目开发流程。</p>
        </div>
      ),
      nginx: (
        <div>
          <p>性能最好的 www 服务器，静态文件性能很强，也适用于建立反向代理。</p>
        </div>
      ),
      wireshark: (
        <div>
          <p>抓包工具，用于检测服务器和前端通讯是否正常，</p>
          <p>也开发爬虫时勇于检查数据包。</p>
        </div>
      ),
      docker: (
        <div>
          <p>服务器应用容器，对于开发而言适用于多个版本的服务器同时共存，单独启动。</p>
        </div>
      ),
      wechat: (
        <div>
          <p>使用 Node 实现过一套微信公众号第三方平台接入，</p>
          <p>了解了它的认证、运行、调用方式。</p>
        </div>
      ),
      alibaba: (
        <div>
          <p>一个很棒的公司，目前在这里就职。</p>
        </div>
      ),
      rhce: (
        <div>
          <p>这其实是运维工程师认证，代表了对 Linux 的熟悉程度</p>
          <p>在04年、10年分别过了两次。</p>
        </div>
      ),
      scumMaster: (
        <div>
          <p>敏捷开发官方认证，有很长时间的敏捷开发经验，对敏捷也有很深的认识。</p>
        </div>
      )
    }
    return (
      <div id={id}>
        <h2>13 Features</h2>
        <div>
          <Popover
            placement="bottomLeft"
            content={popoverContents.nodejs}
            title="NodeJS"
            trigger="hover"
          >
            <a
              href="http://nodejs.org"
              className="feature icon-nodejs"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              NodeJS
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.babel}
            title="Babel"
            trigger="hover"
          >
            <a
              href="http://babeljs.io/"
              className="feature icon-babel"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              Babel
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.react}
            title="React"
            trigger="hover"
          >
            <a
              href="https://github.com/xuqingkuang/react-redux-boilerplate"
              className="feature icon-react"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              React
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.antDesign}
            title="Ant Design"
            trigger="hover"
          >
            <a
              href="http://ant.design"
              className="feature icon-ant-design"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              AntDesign
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.echarts}
            title="ECharts"
            trigger="hover"
          >
            <a
              href="http://echarts.baidu.com"
              className="feature icon-echarts"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              ECharts
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.github}
            title="Github"
            trigger="hover"
          >
            <a
              href="https://github.com/xuqingkuang/"
              className="feature icon-github"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              Github
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.nginx}
            title="Nginx"
            trigger="hover"
          >
            <a
              href="http://nginx.org/"
              className="feature icon-nginx"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              Nginx
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.wireshark}
            title="Wireshark"
            trigger="hover"
          >
            <a
              href="https://www.wireshark.org/"
              className="feature icon-wireshark"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              Wireshark
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.docker}
            title="Docker"
            trigger="hover"
          >
            <a
              href="http://www.docker.com/"
              className="feature icon-docker"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              Docker
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.wechat}
            title="微信"
            trigger="hover"
          >
            <a
              href="https://open.weixin.qq.com/"
              className="feature icon-wechat"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              WeChat
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.alibaba}
            title="阿里巴巴"
            trigger="hover"
          >
            <a
              href="http://www.alibabagroup.com"
              className="feature icon-alibaba"
              onClick={ (evt) => { this.handleLinkClick(evt) } }
            >
              Alibaba
            </a>
          </Popover>
          <Popover
            placement="bottom"
            content={popoverContents.rhce}
            title="RHCE"
            trigger="hover"
          >
            <a
              href={staticUrl('/certifications/rhce.png')}
              className="feature icon-rhce"
              onClick={ (evt) => { this.handleLinkClick(evt, "RHCE") } }
            >
              RHCE
            </a>
          </Popover>
          <Popover
            placement="bottomRight"
            content={popoverContents.scumMaster}
            title="Scrum Master"
            trigger="hover"
          >
            <a
              href={staticUrl('/certifications/scrum-master.png')}
              className="feature icon-scrum-master"
              onClick={ (evt) => { this.handleLinkClick(evt, "Scrum Master") } }
            >
              CSM
            </a>
          </Popover>
        </div>
        <Modal ref="modal"
          visible={ visible }
          title={ title }
          onCancel={ (evt) => { this.handleCancel(evt) } }
          footer={[
            <Button
              key="back"
              type="ghost"
              size="large"
              onClick={ (evt) => { this.handleCancel(evt) } }
            >
              返 回
            </Button>
          ]}
        >
          <p>点击图片可以查看完整尺寸：</p>
          <a href={imageUrl} target="_blank">
            <img src={ imageUrl } alt={ title } />
          </a>
        </Modal>
      </div>
    );
  }
}
