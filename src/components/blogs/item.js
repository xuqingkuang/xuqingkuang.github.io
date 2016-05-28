import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { openBlog } from '../../actions';

export class Blog extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    const { params } = this.props;
    this.props.openBlog(params.slug);
  }

  render () {
    const { blog } = this.props;
    const createMarkup = () => {
      return {
        __html: blog.get('content')
      }
    }
    return (
      <div id="blog-container">
        <h2>{blog.get('title')}</h2>
        <small>{blog.get('category')}</small>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    )
  }
}

// State to props for connect argument
export const mapStateToProps = (state) => {
  return {
    blog: state.blogReducer.blog
  };
}

// Dispatch to props for connect argument
const mapDispatchToProps = { openBlog }

// Conect the component with Redux
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
