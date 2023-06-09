import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import argentBankLogo from './assets/argentBankLogo.png';

function Nav() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        <NavLink class="main-nav-item" to="/sign-in">
          <i>
            <FontAwesomeIcon icon={faCircleUser} />
          </i>
          Sign In
        </NavLink>
      </div>

      {/* <div>
        <NavLink className="main-nav-item" to="/user">
          <i className="fa fa-user-circle" />
          Tony
        </NavLink>
        <NavLink className="main-nav-item" to="/">
          <i className="fa fa-sign-out" />
          Sign Out
        </NavLink>
      </div> */}
    </nav>
  );
}
export default Nav;
