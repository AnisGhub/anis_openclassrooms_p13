import React from 'react';
import './signin.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function SignIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="sign-in-icon">
          <FontAwesomeIcon icon={faCircleUser} />
        </i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">
              Username
              <input type="text" id="username" />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              Password
              <input type="password" id="password" />
            </label>
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">
              <input type="checkbox" id="remember-me" />
              Remember me
            </label>
          </div>
          <NavLink to="/user-profile" className="sign-in-button">
            Sign In
          </NavLink>
          {/* <button className="sign-in-button">Sign In</button> */}
        </form>
      </section>
    </main>
  );
}
