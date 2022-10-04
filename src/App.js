import React from "react";
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import history from './services/history';
import GlobalStyles from "./styles/GlobalStyles";
import Header from './components/Header'
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer
        autoClose={2000} className="toast-container"
        />
      </ Router>
    </ Provider>
  );
}

export default App;
