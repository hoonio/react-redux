import 'babel-polyfill';
import jsonp from 'jsonp-es6';
import { dispatch } from 'react-redux';

export const REQUEST_BLOG = 'REQUEST_BLOG';

const requestBlog = () => ({
  type: REQUEST_BLOG,
});

export const RECEIVE_BLOG = 'RECEIVE_BLOG';

const receiveBlog = (json) => ({
  type: RECEIVE_BLOG,
  posts: json,
});

export const getBlog = () => (dispatch) => {
  dispatch(requestBlog());
  return jsonp('/feed/blog')
    .then(resp => {
      dispatch(receiveBlog(resp.response.posts));
    });
};

export const getBlogIfNeeded = () => (dispatch, getState) => {
  if (getState().blog.ready) {
    return;
  }
  dispatch(getBlog());
};
