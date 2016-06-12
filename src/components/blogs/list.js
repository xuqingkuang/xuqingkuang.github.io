import React, { Component, PropTypes } from 'react';
import { Spin } from 'antd';
import QueueAnim from 'rc-queue-anim';
import moment from 'moment';
import config from '../../config'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { fetchBlogs } from '../../actions';
import Message from '../message';
import blogsStyle from './blogs.less';

export class Blogs extends Component {

  componentDidMount() {
    this.props.fetchBlogs();
  }

  render () {
    const { err, blogs } = this.props;
    if (blogs.length === 0) {
      return (
        <Spin />
      )
    }
    return (
      <Message message={err} id="blogs">
        <QueueAnim delay={10}>
          {
            blogs.map((model) => {
              const url = `/blogs/${model.get('slug')}`;
              return (
                <p key={model.get('slug')} className="blog">
                  <Link to={url}>{model.get('title')}</Link>
                  <small> {model.createdAt && moment(model.createdAt).format(config.dateFormat)}</small>
                </p>
              )
            })
          }
        </QueueAnim>
      </Message>
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
