import React, { PropTypes } from 'react';

const Educations = ({id}) => {
  return (
    <div id={id}>
      <h2>教育背景/时间线</h2>
      <h3>2016年8月6日 离开北京，来到深圳</h3>
      <h3>2008年9月－2014年6月 中国人民大学 继续教育学院 市场营销 本科/学士学位</h3>
      <h3>2001年9月－2003年2月 江西省永新县禾川中学 高中<span> - 因 2013 年春节期间，北京非典封城中断学业</span></h3>
      <h3>1986年9月16日 出生</h3>
    </div>
  );
}

Educations.propTypes = {
  id: PropTypes.string
}

export default Educations;
