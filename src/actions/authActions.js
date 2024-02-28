import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT } from './types';

// Login Action
export const login = (email, password) => async dispatch => {
  try {
    // Make API call to authenticate user
    const res = await axios.post('/api/auth/login', { email, password });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data // Assuming the response contains user data and token
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data // Assuming the response contains error message
    });
  }
};

// Register Action
export const register = ({ name, email, password }) => async dispatch => {
  try {
    // Make API call to register user
    const res = await axios.post('/api/users', { name, email, password });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data // Assuming the response contains user data and token
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data // Assuming the response contains error message
    });
  }
};

// Logout Action
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
