import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import SignIn from './Sign-in/SignIn';
import User from './User/User';
import Error from './404/Error';

export default function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user-profile" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
