import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';
import ContactContext from '../../../context/contact/contactContext';
import './Navbar.css'


const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);


  const { isAuthenticated, logout, user } = authContext;
const {clearContacts} = contactContext;

  const onLogout = (props) => {
    logout();
    clearContacts();
  };

  
  const authLinks = (
    <Fragment>
      <li>
        <Link to='/' onClick={onLogout}>Home</Link>
      </li>
      <li>Hello {user && user.name}</li>
      <li>
        <Link to='/' onClick={onLogout} >
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/' onClick={onLogout} ><i className={icon} /> {title}</Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Githubber',
  icon: 'fab fa-github'
};

export default Navbar;