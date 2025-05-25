import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import userStore from './store/userStore';
import itemStore from './store/itemStore';
import bankStore from './store/bankStore';
import basketStore from './store/basketStore';

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new userStore(),
    item: new itemStore(),
    bank: new bankStore(),
    basket: new basketStore(),
  }}>
    <App />
  </Context.Provider>
);