import React, { Component, PropTypes } from 'react';
import { Spin } from 'antd';
import moment from 'moment';
import config from '../../config'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { fetchBlogs } from '../../actions';
import blogsStyle from './blogs.less';

const delay = (index) => {
  return {
    animationDelay: `${index/50}s`
  }
}

export class Blogs extends Component {

  componentDidMount() {
    this.props.fetchBlogs();
  }

  render () {
    const { err, blogs } = this.props;
    const loading = !err && blogs.length === 0;
    let message;
    if (err && err.message) {
      message = err.message;
      console.error(message);
    }
    
    return (
      <Spin id="blogs" tip={message} spinning={loading}>
        {
          blogs.map((model, index) => {
            const url = `/blogs/${model.get('slug')}`;
            return (
              <p key={model.get('slug')} className="blog" style={delay(index)}>
                <Link to={url}>{model.get('title')}</Link>
                <small> {model.createdAt && moment(model.createdAt).format(config.dateFormat)}</small>
              </p>
            )
          })
        }
      </Spin>
    )
  }
}

// State to props for connect argument
export const mapStateToProps = (state) => {
  return {
    err: state.blogsReducer.err,
    blogs: state.blogsReducer.blogs
  };
}

// Dispatch to props for connect argument
const mapDispatchToProps = { fetchBlogs }

// Conect the component with Redux
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
