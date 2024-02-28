import axios from 'axios';
import { POST_FAIL, POST_SUCCESS } from './types';

// Add Post Action
export const addPost = ({ text }) => async dispatch => {
  try {
    // Make API call to add a new post
    const res = await axios.post('/api/posts', { text });

    dispatch({
      type: POST_SUCCESS,
      payload: res.data // Assuming the response contains the newly created post
    });
  } catch (err) {
    dispatch({
      type: POST_FAIL,
      payload: err.response.data // Assuming the response contains error message
    });
  }
};
