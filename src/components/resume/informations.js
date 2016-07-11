import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';

const Infomations = ({id}) => {
  return (
    <Row id={id}>
      <Col xs={24} sm={4} className="name">
        <h1>旷旭卿</h1>
      </Col>
      <Col xs={24} sm={20} className="links screen-only">
        <Row>
          <Col xs={24} sm={6}>
            电话：
            <a href="tel:13811606726">13811606726</a>
          </Col>
          <Col xs={24} sm={18}>
            链接：
            <a href="mailto:x@kxq.io">邮箱</a>
            <a href="http://kxq.io">主页</a>
            <a href="http://www.atatech.org/users/177348">ATA</a>
            <a href="https://github.com/xuqingkuang">Github</a>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={16} className="print-only">
        <table>
          <tbody>
            <tr>
              <td>电话：</td>
              <td><a href="tel:13811606726">13811606726</a></td>
            </tr>
            <tr>
              <td>邮箱：</td>
              <td><a href="mailto:x@kxq.io">x@kxq.io</a></td>
            </tr>
            <tr>
              <td>主页：</td>
              <td><a href="http://kxq.io">kxq.io</a></td>
            </tr>
            <tr>
              <td>ATA：</td>
              <td><a href="http://www.atatech.org/users/177348">www.atatech.org/users/177348</a></td>
            </tr>
            <tr>
              <td>Github：</td>
              <td><a href="https://github.com/xuqingkuang">github.com/xuqingkuang</a></td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
}

Infomations.propTypes = {
  id: PropTypes.string
}

export default Infomations;
