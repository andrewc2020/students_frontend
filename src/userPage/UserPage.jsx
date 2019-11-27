import { setSourceMapRange } from "typescript";
import React from 'react';


import {Component} from 'react';

//let fakeServerData = { userName: "Fred Bloggs", role: "user"};
let fakeServiceData = login("user","user");
function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if ([401, 403].indexOf(response.status) !== -1) {
              // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
              
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}

function login(username, password) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  };

  return fetch(`http://localhost:4000/users/authenticate`, requestOptions)
      .then(handleResponse)
      .then(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(user);
          

          return user;
      });
}

class UserPage extends Component{
   
    constructor(){
        super();
        this.state = { 
          serverData : {} 
        };
      }
    
      componentDidMount(){
        
        setTimeout(()=>{
          this.setState({ serverData : fakeServerData});
    
        },1000);
    
        
          
        
          
        
    
        
       
      }
      render(){
        return  <div className='UserPage'><h1 >{this.state.serverData.userName}'s Playlists</h1></div>
      }
      
    
}
export default UserPage;