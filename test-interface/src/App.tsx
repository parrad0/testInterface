/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import List from './components/list';
import { store } from './rtk/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Our test
        <List />
      </div>
    </Provider>
  );
}

export default App;
