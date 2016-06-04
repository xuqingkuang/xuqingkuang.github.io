import React from 'react';

export default ({id}) => {
  return (
    <div id={id}>
      <h2>教育背景</h2>
      <article>
        <h3>
          2008年9月－2014年6月 中国人民大学继续教育学院 市场营销 本科
        </h3>
        <section>
          那时已经开始对消费者是如何使用产品产生了兴趣，所以经过半年准备参加了考试，
          大学期间最大的收获莫过于《消费者心理学》，特别启发思考。
        </section>
      </article>
      <article>
        <h3>2001年9月－2004年1月 江西省永新县禾川中学 高中</h3>
        <section>
          2004年寒假来北京，主要目的是想在西直门的银河网络教育中心里参加 RHCE 考试，
          之前已经担任了
          <a href="http://www.linuxfans.org">
            中国 Linux 公社
            <span className="print-link print-only">[www.linuxfans.org]</span>
          </a>
          的 Gentoo 版版主，是国内最早一批使用 Gentoo 的人，结果没来多久碰上了非典没法回去，
          等非典解禁，考完后已经 6 月份了，遂辍学，而后和当时的主任老师一起协助他进行教学工作。
        </section>
      </article>
    </div>
  );
}
