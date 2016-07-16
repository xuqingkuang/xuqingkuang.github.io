import React, { Component, PropTypes } from 'react';
import Markdown from 'react-markdown';
import { Spin, Affix, Button } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { openBlog } from '../../actions';
import moment from 'moment';
import config from '../../config'
import './blogs.less';

export class Blog extends Component {

  static propTypes = {
    openBlog: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    err: PropTypes.object,
    blog: PropTypes.object
  }

  componentDidMount () {
    window.scrollTo(0, 0);
    const { openBlog, params } = this.props;
    openBlog(params.slug);
  }

  renderBlog (blog) {
    switch (blog.get('format')) {
      case "markdown":
        return (
          <div className="content">
            <Markdown source={blog.get('content')} />
          </div>
        )
      default:
        const createMarkup = () => {
          return {
            __html: blog.get('content')
          }
        }
        return (
          <div className="content" dangerouslySetInnerHTML={createMarkup()} />
        )
    }
  }

  render () {
    const { err, blog } = this.props;
    const loading = !err && !blog;
    let message;
    if (err && err.message) {
      message = err.message;
      window.console.error(message);
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
          {
            this.renderBlog(blog)
          }
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
