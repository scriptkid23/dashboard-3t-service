import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './redux/configureStore'
import './styles/font.css'
import 'bootstrap/dist/css/bootstrap.min.css';
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, document.getElementById('root'))
  })
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
