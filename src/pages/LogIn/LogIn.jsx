import React from 'react';
import './login.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth';

export default function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Handles the user login and save token in state
   * @param {Event} event - The form submit event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
      dispatch(authActions.updateToken(data.body));
      navigate('/user-profile');
    } catch (error) {
      // Handle server error or invalid email/password error
      console.error('Error:', error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">
              Username
              <input type="text" id="email" />
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
          <button type="submit" className="sign-in-button">
            {' '}
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
