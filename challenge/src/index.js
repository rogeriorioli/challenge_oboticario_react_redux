import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './api/cartReducer';
import { Provider } from 'react-redux';


ReactDOM.render(<Provider store={cartReducer}><App /></Provider>, document.getElementById('root'));


