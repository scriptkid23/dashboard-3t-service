import React from 'react';
import { HashRouter, Route, Switch, Redirect,BrowserRouter } from "react-router-dom";
import './styles/App.css'
import ForgotPassword from './screens/Auth/PasswordRecovery'
function App() {
  return (
    <div>
      <ForgotPassword/>
    </div>
  );
}

export default App;
