import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './config/Redux/Store/configureStore';
import ScrollToTop from './config/common/util/ScrollToTop';
import './index.css';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Provider>
);