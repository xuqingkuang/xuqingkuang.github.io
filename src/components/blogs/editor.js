import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { Spin, Row, Col } from 'antd';
import { Blog } from './item';
import EditorForm from './editor-form';
import { openBlog } from '../../actions';
import moment from 'moment';
import config from '../../config'

export class Editor extends Blog {

  render () {
    const { err, blog } = this.props;
    const loading = !err && !blog;
    let message;
    if (err && err.message) {
      message = err.message;
      window.console.error(message);
    }
    return (
      <Spin id="blog-editor" tip={message} spinning={loading}>
        <h1>Blog editor</h1>
        <Row>
          <Col sm={12} className="editor-container">
            <EditorForm />
          </Col>
          <Col sm={12}>
            <h2>{blog.get('title')}</h2>
            <small>{moment(blog.createdAt).format(config.dateFormat)}</small>
            <div id="blog">
              {
                this.renderBlog(blog)
              }
            </div>
          </Col>
        </Row>
      </Spin>
    )
  }
}

// State to props for connect argument
export const mapStateToProps = (state) => {
  console.log(state.blogReducer.attributs)
  return {
    err: state.blogReducer.err,
    blog: state.blogReducer.blog
  };
}

// Dispatch to props for connect argument
const mapDispatchToProps = { openBlog }

// Conect the component with Redux
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
