import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import AdminPage from './AdminPage/AdminPage';
import {userService} from './_services/user-service';
import {ConsoleLog} from './_helpers/logger';
import assert from 'assert';



import { authenticationService } from './_services/';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('can import authenticationService',()=>{
  authenticationService.login('Saladin Sebag', 'salam').then((value)=>{
    console.log(value.user);
  })
})
it('should import LoginPage without crashing',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<LoginPage />, div);
  ReactDOM.unmountComponentAtNode(div);
})
it('should import HomePage without crashing',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<HomePage />, div);
  ReactDOM.unmountComponentAtNode(div);

})
it('should import AdminPage without crashing',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<AdminPage />, div);
  ReactDOM.unmountComponentAtNode(div);

})
it('can login ordinary user authenticationService',()=>{
  authenticationService.login('Plain Pam', 'plainoldpam').then((value)=>{
    assert.equal(value.userName, "Plain Pam");
  })
})