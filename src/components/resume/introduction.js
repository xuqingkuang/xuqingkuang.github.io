import React, { PropTypes } from 'react';

const Introduction = ({id}) => {
  return (
    <article id={id}>
      <h2>自我简介</h2>
      <section>
        本人从业12年，8年网站开发经验，前后端都有涉及，Javascript/CSS 基础扎实，对新技术敏感，
        目前是阿里商家业务部智库产品的前端负责人，曾是 AdMaster 的站点监测工具 SiteMaster
        前端负责人，曾经独立开发了 Nitrate 测试工具，拥有 Scrum 敏捷开发认证，
        拥有良好的团队领导能力。
      </section>
      <section>
        因原籍江西，所以决定回南方发展。
      </section>
    </article>
  );
}

Introduction.propTypes = {
  id: PropTypes.string
}

export default Introduction;
