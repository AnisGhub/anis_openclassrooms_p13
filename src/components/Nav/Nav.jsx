import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import argentBankLogo from './assets/argentBankLogo.png';
import LogOut from '../../pages/LogOut/LogOut';

function Nav() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const firstName = useSelector((state) => state.auth.firstName).toUpperCase();
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isAuthenticated ? (
          <div>
            <NavLink className="main-nav-item" to="/user-profile">
              <i>
                <FontAwesomeIcon icon={faCircleUser} />
              </i>
              {firstName}
            </NavLink>
            <LogOut />
          </div>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <i>
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}
export default Nav;
