import React from 'react';
import { HashRouter, Route, Switch, Redirect,BrowserRouter } from "react-router-dom";
import './styles/App.css'
import Login from './screens/Auth/Login'
function App() {
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
