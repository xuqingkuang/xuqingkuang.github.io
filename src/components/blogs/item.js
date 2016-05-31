import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { openBlog } from '../../actions';
import Message from '../message';
import moment from 'moment';
import config from '../../config'

export class Blog extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    const { params } = this.props;
    this.props.openBlog(params.slug);
  }

  render () {
    const { err, blog } = this.props;
    const createMarkup = () => {
      return {
        __html: blog.get('content')
      }
    }
    return (
      <Message message={err} id="blog-container">
        <h2>{blog.get('title')}</h2>
        <small>[{blog.get('category')}] {moment(blog.createdAt).format(config.dateFormat)}</small>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </Message>
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
