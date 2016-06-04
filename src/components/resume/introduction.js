import React from 'react';

export default ({id}) => {
  return (
    <article id={id}>
      <h2>自我简介和求职意向</h2>
      <section>
        本人在1986年9月16日出生于江西省吉安市永新县，从 2008 年开始专职从事网站开发工作，
        因在制作测试结果报表时发现了这是片奇特的新天地，从此迷恋于各种数据可视化，后于 2013 
        年加入 AdMaster 专职从事互联网广告和站点的统计数据呈现，
        目前在阿里巴巴商家业务部门从事天猫大品牌商的数据报表应用和数据可视化相关研发。
      </section>
      <section>
        因曾经在移动系统集成商 ThunderSoft 工作过，对于各类媒体适配也有很深的研究。
      </section>
      <section>
        希望能继续在数据分析部门从事前端数据呈现工作，我希望能做出具有生动表现力，
        能为客户带来价值的报表。
      </section>
    </article>
  );
}
