import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserForm from '../src/components/userForm/userForm';

ReactDOM.render(<UserForm />, document.getElementById('root'));

// setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);
