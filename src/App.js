import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

import {Switch, Route, Redirect} from 'react-router-dom';
import NewPage from './components/newPage';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route exact path="/redux-local-storage/content" component={Content} />
        <Route exact path="/redux-local-storage/newpage/:number" component={NewPage} />
        <Redirect to="/redux-local-storage/content" />
      </Switch>

      <Footer />
    </div>
    
  )
}

export default App;