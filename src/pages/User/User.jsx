import React, { useEffect, useState } from 'react';
import './user.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth';

export default function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get token from store to fetch user profile data
  const token = useSelector((state) => state.auth.token);
  // get firstname and lastname from store
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);

  const [isEditing, setIsEditing] = useState(false);

  /**
   * Handles the click event for the "Edit Name" button.
   */
  const handleEditClick = () => {
    setIsEditing(true);
  };

  /**
   * Handles the click event for the "Cancel" button.
   */
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  // Fetch user profile from the API with token and update the Redux store
  useEffect(() => {
    if (!token) {
      navigate('/');
      return;
    }
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        dispatch(authActions.login(data.body));
      } catch (error) {
        // Handle errors and redirect to the login page
        console.error('Error:', error);
        navigate('/login');
      }
    };
    fetchUser();
  }, [dispatch, navigate, token]);

  /**
   * Handles the form submission for updating the user profile.
   * @param {Object} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstNameValue = e.target.firstNameInput?.value || firstName;
    const lastNameValue = e.target.lastNameInput?.value || lastName;
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: firstNameValue,
          lastName: lastNameValue,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
      dispatch(authActions.login(data.body));
      setIsEditing(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        {isEditing ? (
          // edit form
          <form className="edit-inputs-buttons" onSubmit={handleSubmit}>
            <div className="edit-inputs">
              <input
                type="text"
                defaultValue={firstName}
                name="firstNameInput"
                required
                disabled={!isEditing}
              />
              <input
                type="text"
                defaultValue={lastName}
                name="lastNameInput"
                required
                disabled={!isEditing}
              />
            </div>
            <div className="edit-buttons">
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          // edit button
          <button type="button" className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button type="button" className="transaction-button">
            View transactions
          </button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button type="button" className="transaction-button">
            View transactions
          </button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button type="button" className="transaction-button">
            View transactions
          </button>
        </div>
      </section>
    </main>
  );
}
