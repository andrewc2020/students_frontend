import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserPage from './userPage/UserPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('creates adds a dynamic classw',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<UserPage />, div);
  ReactDOM.unmountComponentAtNode(div);

})
