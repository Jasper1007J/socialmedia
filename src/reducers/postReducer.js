import { POST_SUCCESS, POST_FAIL } from '../actions/types';

const initialState = {
  posts: [],
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, payload],
        error: null
      };
    case POST_FAIL:
      return {
        ...state,
        error: payload // Assuming payload contains error message
      };
    default:
      return state;
  }
}
