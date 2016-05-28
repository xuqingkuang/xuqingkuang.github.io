import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import config from '../../config'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { fetchBlogs } from '../../actions';

const styles = {
  link: {
    color           : '#39c',
    fontWeight      : '400',
    textDecoration  : 'none'
  }
}

export class Blogs extends Component {

  componentDidMount() {
    this.props.fetchBlogs();
  }

  render () {
    const { blogs } = this.props;
    return (
      <div id="blogs-container">
        <h1>我的博客</h1>
        {
          blogs.map((model) => {
            const url = `/blogs/${model.get('slug')}`;
            return (
              <p key={model.get('slug')}>
                <span>[{model.get('category')}] </span>
                <Link to={url} style={styles.link}>{model.get('title')}</Link>
                <small> {model.createdAt && moment(model.createdAt).format(config.dateFormat)}</small>
              </p>
            )
          })
        }
      </div>
    )
  }
}

// State to props for connect argument
export const mapStateToProps = (state) => {
  return {
    blogs: state.blogsReducer.blogs
  };
}

// Dispatch to props for connect argument
const mapDispatchToProps = { fetchBlogs }

// Conect the component with Redux
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
