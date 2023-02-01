import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './config/Redux/Store/configureStore';
import ScrollToTop from './config/common/util/ScrollToTop';
import { loadEvent } from './features/Events/EventActions';

const store = configureStore();
store.dispatch(loadEvent())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Provider>
  // </React.StrictMode>
);