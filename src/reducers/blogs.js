import {
  BLOGS_FETCHED,
  BLOGS_FETCHED_FAILURE,
  BLOG_OPENED,
  BLOG_OPENED_FAILURE
} from '../constants/blogs';

const blogsInitialState = {
  blogs: [],
  err: null
}

export const blogsReducer = (state = blogsInitialState, action) => {
  switch (action.type) {
    case BLOGS_FETCHED:
      return {
        blogs: action.blogs
      }
    case BLOGS_FETCHED_FAILURE:
      return {
        err: action.err
      }
    default:
      return state
  }
}

const blogInitialState = {
  // Fake blog
  blog: {
    get: () => { return 'Loading' },
    attributes: {
      format: 'markdown'
    }
  },
  err: null
}

export const blogReducer = (state = blogInitialState, action) => {
  switch (action.type) {
    case BLOG_OPENED:
      return {
        blog: action.blog
      }

    case BLOG_OPENED_FAILURE:
      return {
        err: action.err
      }
    default:
      return state
  }
}
