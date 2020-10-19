import React from 'react';
import {Route, Switch, Redirect,HashRouter} from "react-router-dom";
import './styles/App.css'
import Auth from './layouts/Auth';
import Dashboard from './layouts/Dashboard';
import {Helmet} from "react-helmet";
function App() {
  return (
    <HashRouter>
      <Helmet>
          <title>Nested Title</title>
          <meta name="description" content="Helmet application" />
          <meta property="og:type" content="article" />
          <meta name="og:image" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <link rel="apple-touch-icon" href="https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg" />
          <link rel="apple-touch-icon" sizes="72x72" href="https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg" />
      </Helmet>
      <Switch>
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route path="/dashboard" render={props => <Dashboard {...props}/>} />
        <Redirect from="/"  to="/dashboard/chat-room" />
      </Switch>
    </HashRouter>
  );
}

export default App;
