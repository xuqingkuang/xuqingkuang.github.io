import blogQuery from '../models/blog-query';

import {
  BLOGS_FETCHED,
  BLOGS_FETCHED_FAILURE,
  BLOG_OPENED,
  BLOG_OPENED_FAILURE
} from '../constants/blogs';

export const fetchBlogs = () => {
  return (dispatch) => {
    const callback = (err, blogs) => {
      if (err) {
        return {
          type: BLOGS_FETCHED_FAILURE,
          err: err
        }
      }
      return {
        type: BLOGS_FETCHED,
        blogs: blogs
      }
    }
    if (blogQuery.results) {
      return dispatch(callback(null, blogQuery.results));
    }
    blogQuery._where = {};
    blogQuery.find().then((blogs) => {
      blogQuery.results = blogs;
      return dispatch(callback(null, blogs));
    }, (err) => {
      return dispatch(callback(err));
    });
  }
}

export const openBlog = (slug) => {
  const callback = (err, blog) => {
    if (err) {
      return {
        type: BLOG_OPENED_FAILURE,
        err: err
      }
    }
    return {
      type: BLOG_OPENED,
      blog: blog
    }
  }
  return (dispatch) => {
    if (!blogQuery.results) {
      blogQuery.equalTo('slug', encodeURIComponent(slug));
      return blogQuery.find().then((blogs) => {
        if (blogs.length === 0) {
          return dispatch(callback('Not found'));
        }
        return dispatch(callback(null, blogs[0]));
      }, (err) => {
        return dispatch(callback(err));
      });
    }
    const blogs = blogQuery.results.filter((blog) => {
      return blog.get('slug') === encodeURIComponent(slug);
    });
    if (blogs.length === 0) {
      return dispatch(callback('Not found'));
    }
    if (blogs.length > 1) {
      return dispatch(callback(`Got multiple contents - ${blogs.length}`));
    }
    return dispatch(callback(null, blogs[0]));
  }
}
