/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the authentication slice
const initialState = {
  isAuthenticated: false,
  firstName: '',
  lastName: '',
  email: '',
  token: '',
};

// Create the authentication slice using createSlice from Redux Toolkit
const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    /**
     * Updates the authentication token.
     * @param {Object} state - The current state.
     * @param {Object} action - The action with payload containing the new token.
     */
    updateToken(state, actions) {
      state.token = actions.payload.token;
    },
    /**
     * Logs the user in and updates the user information.
     * @param {Object} state - The current state.
     * @param {Object} action - The action with payload containing user information.
     */
    login(state, actions) {
      state.isAuthenticated = true;
      state.firstName = actions.payload.firstName;
      state.lastName = actions.payload.lastName;
      state.email = actions.payload.email;
    },
    /**
     * Logs the user out by resetting the state.
     * @param {Object} state - The current state.
     */
    logout(state) {
      state.isAuthenticated = false;
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.token = '';
    },
  },
});

// Export the action creators
export const authActions = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
