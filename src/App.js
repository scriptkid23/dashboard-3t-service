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
          <title>{"title"}</title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="csrf_token" content="" />
          <meta property="type" content="website" />
          <meta property="url" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="_token" content="" />
          <meta name="robots" content="noodp" />
          <meta property="title" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <meta property="quote" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <meta name="description" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <meta property="image" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <meta property="og:quote" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <meta property="og:hashtag" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <meta property="og:image" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <meta content="image/*" property="og:image:type" />
          <meta property="og:url" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />
          <meta property="og:site_name" content="CampersTribe" />
          <meta property="og:description" content={"https://www.flaticon.com/svg/static/icons/svg/3529/3529980.svg"} />    
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
