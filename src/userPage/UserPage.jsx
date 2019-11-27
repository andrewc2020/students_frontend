import { setSourceMapRange } from "typescript";
import { authenticationService } from '../_services/authentication-service';
import React from 'react';


import {Component} from 'react';

let fakeServerData = {};
authenticationService.login("Saladin Sebag","salam").then((value)=>{
fakeServerData = value.user;  });


// function handleResponse(response) {
//   return response.text().then(text => {
//       const data = text && JSON.parse(text);
//       if (!response.ok) {
//           if ([401, 403].indexOf(response.status) !== -1) {
//               // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
              
//           }

//           const error = (data && data.message) || response.statusText;
//           return Promise.reject(error);
//       }

//       return data;
//   });
// }

// (async () => {
//   const rawResponse = await fetch('http://localhost:5000/users/authenticate', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ 'userName' : 'Saladin Sebag', 'password':'salam'})
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// })();

// function login(username, password) {
//   const requestOptions = {
//       method: 'POST',
      
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ 'userName': username, 'password': password })
//     }
    
  

//   return fetch(`http://localhost:5000/users/authenticate`, requestOptions)
//       .then(handleResponse)
//       .then(user => {
//           // store user details and jwt token in local storage to keep user logged in between page refreshes
//           //localStorage.setItem('currentUser', JSON.stringify(user));
        
          

//           return user;
//       });
// }

//console.log(login("andrew chudley", "jfljasdfjajf"))

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