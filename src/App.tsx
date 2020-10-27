import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {SignInPage, HomePage} from './pages';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={ SignInPage } />
        <Route path="/" component={ HomePage } exact />
      </Switch>
    </div>
  );
}

export default App;
