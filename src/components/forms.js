import React from 'react';
import {connect} from 'react-redux';
import {formCollect} from '../actions';
import {logIn} from '../actions';

import './forms.css';

function RegForm(props) {
  return (
    <div className="content__reg-form">
      <div className="form">
        <form action="/" id="regForm" onSubmit={(e) => {
          e.preventDefault();
          const form = document.getElementById('regForm');
          
          const formData = new FormData(form);
          const json = JSON.stringify(Object.fromEntries(formData.entries()));
          const data = JSON.parse(json);

          props.dispatch(formCollect(data));
          props.dispatch(logIn());
          form.reset();
        }}>
          <fieldset className="form__fieldset">
            <legend className="form__name">Регистрация</legend>

            <input className="form__input" type="text" name="name" placeholder="Имя" required></input>
            <input className="form__input" type="text" name="surname" placeholder="Фамилия" required></input>
            <input className="form__input" type="text" name="city" placeholder="Город" required></input>
            <input className="form__input" type="phone" name="phone" placeholder="Телефон" required></input>
            <input className="form__input" type="email" name="email" placeholder="E-mail" required></input>
            <input className="form__input" type="password" name="password" placeholder="Пароль" required></input>

            <label className="form__checkbox">
              <input className="checkbox" type="checkbox" required></input>
              <span className="checkbox__text">Ознакомлен</span>
            </label>
          </fieldset>
          <button className="form__btn">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  )
}

export default connect()(RegForm);