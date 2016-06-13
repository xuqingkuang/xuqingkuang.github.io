import React, { Component } from 'react';
import { Timeline, Modal, Button } from 'antd';
import { staticUrl } from '../../utils';

export default class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: 'none',
      imageUrl: 'about:blank'
    }
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  handleLinkClick (evt) {
    evt.preventDefault();
    const url = evt.currentTarget.getAttribute('href');
    this.setState({
      visible: true,
      title: 'Recommendation',
      imageUrl: url
    });
  }

  render () {
    const { id } = this.props;
    const { visible, title, imageUrl } = this.state;

    return (
      <div id={id}>
        <h2>主管评价</h2>
        <Timeline>
          <Timeline.Item>
            “大赞一下释我本周的工作，大家一起共勉：
            1、周报内容详实；
            2、对更新的方案有新的技术文档沉淀（统一整理到 redmine 或者 gitlab上 吧）；
            3、基于 docker 高效的分享和实战应用。”
            &nbsp;-&nbsp; 
            <a
              href={staticUrl('/recommendations/3-4.png')}
              onClick={(evt) => { this.handleLinkClick(evt); }}
            >
              @澄苍（2016年3月4日）
            </a>
          </Timeline.Item>
          <Timeline.Item>
            “释我的主动性很好，ant.design 可以和大家一起分享讨论下。”
            &nbsp;-&nbsp;
            <a
              href={staticUrl('/recommendations/3-18.png')}
              onClick={(evt) => { this.handleLinkClick(evt); }}
            >
              @澄苍（2016年3月18日）
            </a>
          </Timeline.Item>
          <Timeline.Item>
            “@释我(旷旭卿) 一图胜千言。”
            &nbsp;-&nbsp;
            <a
              href={staticUrl('/recommendations/4-6.png')}
              onClick={(evt) => { this.handleLinkClick(evt); }}
            >
              @澄苍（2016年4月6日）
            </a>
          </Timeline.Item>
          <Timeline.Item>
            “释我的可视化感觉不错，两个 Show Case，虽然简单，但是贴近客户分析视角。”
            &nbsp;-&nbsp;
            <a
              href={staticUrl('/recommendations/5-5.png')}
              onClick={(evt) => { this.handleLinkClick(evt); }}
            >
              @澄苍（2016年5月5日）
            </a>

          </Timeline.Item>
          <Timeline.Item>
            “释我能主动在工作中深入和积累技术点和心得，并分享出来，值得鼓励和大家学习，
            刚好最近在和大家准备晋升相关的工作，我们会发现技术点、
            亮点都是需要在平时的工作中去发掘和沉淀的，否则只能是工作内容的罗列，
            希望大家功夫花在平时，这样到关键的时候才是水到渠成摘果子的时候。”
            &nbsp;-&nbsp;
            <a
              href={staticUrl('/recommendations/5-27.png')}
              onClick={(evt) => { this.handleLinkClick(evt); }}
            >
              @澄苍 (2016年5月27日)
            </a>
          </Timeline.Item>
        </Timeline>
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
