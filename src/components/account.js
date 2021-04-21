import React from 'react';
import {connect} from 'react-redux';

import './account.css';

function Account(props) {
  return (
    <div className="account__info">
      <h1>Ваш аккаунт</h1>
      <p>Имя: <span>{props.name}</span></p>
      <p>Фамилия: <span>{props.surname}</span></p>
      <p>Город: <span>{props.city}</span></p>
      <p>Телефон: <span>{props.phone}</span></p>
      <p>Почта: <span>{props.email}</span></p>
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    name: state.formCollected.name,
    surname: state.formCollected.surname,
    city: state.formCollected.city,
    phone: state.formCollected.phone,
    email: state.formCollected.email
  }
}

export default connect(mapStateToProps)(Account);