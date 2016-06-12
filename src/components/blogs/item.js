import React, { Component, PropTypes } from 'react';
import { Affix, Button, Spin } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { openBlog } from '../../actions';
import moment from 'moment';
import config from '../../config'
import blogsStyle from './blogs.less';

export class Blog extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    const { params } = this.props;
    this.props.openBlog(params.slug);
  }

  render () {
    const { err, blog } = this.props;
    const loading = !err && !blog;
    let message;
    if (err && err.message) {
      message = err.message;
      console.error(message);
    }
    const createMarkup = () => {
      return {
        __html: blog.get('content')
      }
    }

    return (
      <Spin id="blog" tip={message} spinning={loading}>
        <h2>{blog.get('title')}</h2>
        <small>{moment(blog.createdAt).format(config.dateFormat)}</small>
        <div className="container">
          <div className="affix">
            <Affix offsetTop={10}>
              <Link to="/">
                <Button type="ghost" icon="caret-left"></Button>
              </Link>
            </Affix>
          </div>
          <div className="content" dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </Spin>
    )
  }
}

// State to props for connect argument
export const mapStateToProps = (state) => {
  return {
    err: state.blogReducer.err,
    blog: state.blogReducer.blog
  };
}

// Dispatch to props for connect argument
const mapDispatchToProps = { openBlog }

// Conect the component with Redux
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
