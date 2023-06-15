import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth';

function LogOut() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());
    // navigate('/');
  };

  return (
    <button type="button" className="main-nav-item" onClick={handleLogout}>
      LogOut
      <FontAwesomeIcon icon={faSignOut} />
    </button>
  );
}

export default LogOut;
