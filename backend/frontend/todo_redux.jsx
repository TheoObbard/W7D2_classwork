import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  ReactDOM.render(< Root store={store} />, document.getElementById("content"));
});