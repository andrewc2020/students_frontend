import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import UserPage from './userPage/UserPage';
import { authenticationService } from './_services/';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('adds a dynamic class',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<UserPage />, div);
  ReactDOM.unmountComponentAtNode(div);

})
it('can import authenticationService',()=>{
  authenticationService.login('Saladin Sebag', 'salam').then((value)=>{
    console.log(value.user);
  })
})
