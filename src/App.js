import React from 'react';
import {connect} from 'react-redux';
import {logIn, logOut} from './actions';

import './App.css';

function App(props) {
  const logInNow = () => props.dispatch(logIn()),
        logOutNow = () => props.dispatch(logOut());

  return (
    props.loggedIn
      ? <button onClick={logOutNow}>выйти</button>
      : <button onClick={logInNow}>войти</button>
  )
}

const mapStateToProps = function(state) {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(App)