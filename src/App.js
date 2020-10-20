import React from 'react';
import {Route, Switch, Redirect,HashRouter} from "react-router-dom";
import './styles/App.css'
import Auth from './layouts/Auth';
import Dashboard from './layouts/Dashboard';
import Seo from './components/Seo'
function App() {
  return (
    <HashRouter>
      <Seo></Seo>
      <Switch>
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route path="/dashboard" render={props => <Dashboard {...props}/>} />
        <Redirect from="/"  to="/dashboard/chat-room" />
      </Switch>
    </HashRouter>
  );
}

export default App;
