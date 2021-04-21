import React from 'react';
import {connect} from 'react-redux';
import {logOut} from '../actions';

import './login.css';

function Login(props) {
  const logOutNow = () => props.dispatch(logOut());
  
  if (props.loggedIn) {
    return (
      <div className="header__login">
        <span>{props.email}</span>
        <button className="login__btn" onClick={logOutNow}>выйти</button>
      </div>
    )
    } else {
      return <div className="header__login" />
    }
}

const mapStateToProps = function(state) {
  return {
    loggedIn: state.loggedInOut.loggedIn,
    email: state.formCollected.email
  }
}

export default connect(mapStateToProps)(Login);