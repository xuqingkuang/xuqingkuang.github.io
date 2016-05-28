import Blog from '../models/blog';
import {
  BLOGS_FETCHED,
  BLOGS_FETCHED_FAILURE,
  BLOG_OPENED,
  BLOG_OPENED_FAILURE
} from '../constants/blogs';

const blogsInitialState = {
  blogs: [
    new Blog({
      category: 'Loading'
    })
  ],
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
      break;

    default:
      return state
  }
}

const blogInitialState = {
  blog: new Blog(),
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
      break;

    default:
      return state
  }
}
