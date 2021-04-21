import React from 'react';
import RegForm from './forms';
import { connect } from 'react-redux';
import {WelcomeText} from './content';

import './content.css';

function ContentNewPage(props) {
  return (
    <div className="content new-page">
      <div className="content__text">
        <h1>
          Информация к ознакомлению {props.props}
        </h1>

        <p>Vivamus eros justo, pretium nec cursus euismod, ultricies volutpat nisi. Nunc non feugiat nibh. Nam id sem sit amet quam elementum varius. Sed eu nisi et risus rhoncus eleifend. Integer viverra enim magna, vel euismod nisl gravida in. Suspendisse rhoncus eu magna eget fringilla. Mauris vel fringilla eros, a mollis leo. Mauris vitae magna tempor libero dignissim dapibus eu vitae lacus.</p>

        <p>Fusce pretium accumsan nunc ut varius. Sed ut placerat augue. Nulla faucibus quam et enim facilisis aliquet. Quisque eu felis rutrum nulla lobortis finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus lacus nec lacinia pharetra. Praesent pretium, lectus in pretium suscipit, nisi odio luctus mi, scelerisque blandit ipsum tortor quis est. Duis congue massa ut mi condimentum, pharetra luctus tortor interdum. Cras euismod volutpat nisi id tempor. Integer vulputate metus vulputate lacus porttitor scelerisque. Nam eget molestie odio, nec bibendum erat. Nunc ex ante, interdum vitae lacus et, viverra luctus sem. Nullam sagittis massa eu arcu lobortis, ut pharetra nibh pretium. Cras maximus luctus erat quis euismod. Nunc molestie turpis a augue imperdiet porttitor.</p>
      </div>

      {props.regForm}
      {props.welcome}
    </div>
  )
}

function NewPage(props) {
  return (
    props.loggedIn
      ? <div className="logged-in">
          <ContentNewPage welcome={<WelcomeText text="Экслюзив для авторизованных пользователей" />} props={props.match.params.number} />
        </div>

      : <div className="logged-out">
          <ContentNewPage regForm={<RegForm />} props={props.match.params.number} />
        </div>
  )
}

const mapStateToProps = function(state) {
  return {
    loggedIn: state.loggedInOut.loggedIn
  }
}

export default connect(mapStateToProps)(NewPage);