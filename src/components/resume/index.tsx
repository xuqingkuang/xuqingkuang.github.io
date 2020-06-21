import * as React from 'react';
import { notification } from 'antd';
import Infomations from './informations';
import Features from './features';
import Introduction from './introduction';
import Recommendations from './recommendations';
import Experiences from './experiences';
import Educations from './educations';
import './resume.less';


export default class Resume extends React.Component {

  componentDidMount () {
    document.title = '旷旭卿的简历';
    notification.open({
      message: '本页面已经为各种设备优化过',
      description: '本页面已经为大到打印机，小到手机优化过，欢迎各种尝试。打印时记得选择“打印背景图”。'
    });
  }

  render () {
    return (
      <div id="resume">
        <div id="print-notice" className="print-only">
          密密麻麻的字儿看着太累了，还是看在线版的吧：
          <a href="http://kxq.io/#me">http://kxq.io/#me</a>
          <hr />
        </div>
        <Infomations id="informations" />
        <hr />
        <Features id="features" />
        <Introduction id="introduction"/>
        <Recommendations id="recommendations" />
        <Experiences id="experiences" />
        <Educations id="educations" />
      </div>
    );
  }

}
