import React, { PropTypes } from 'react';
import { staticUrl } from '../../utils';

const Introduction = ({id}) => {
  return (
    <article id={id}>
      <h2>自我简介</h2>
      <section>
        本人从业近16年，12年网站开发经验，10年的产品和组织协调工作，2010年拿下敏捷开发的             <a
          href={staticUrl('/certifications/scrum-master.png')}
          onClick={ (evt) => { this.handleLinkClick(evt, "Scrum Master") } }
        >
          Scrum Master 认证
        </a> 和 <a
          href={staticUrl('/certifications/rhce.png')}
          onClick={ (evt) => { this.handleLinkClick(evt, "RHCE") } }
        >
          RHCE
        </a> 认证，曾在红旗 Linux、Red Hat Linux、阿里巴巴、腾讯就职，在多个开源项目中都有参与，
        目前是腾讯中台的跨端项目 <a href="//hippyjs.org">Hippy</a> 的前端负责人。在技术和管理上都有丰富的经验。
      </section>
      <section>
        求职方向是数据可视化前端 Teah Lead，并依然希望能在开源软件方面作出贡献。
      </section>
    </article>
  );
}

Introduction.propTypes = {
  id: PropTypes.string
}

export default Introduction;
