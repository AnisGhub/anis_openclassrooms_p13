import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

function LogOut() {
  const dispatch = useDispatch();

  /**
   * Handles the user logout.
   */
  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <span className="main-nav-item" onClick={handleLogout}>
      <i className="fa fa-sign-out" />
      Sign Out
    </span>
  );
}

export default LogOut;
