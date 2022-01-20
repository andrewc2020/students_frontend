import { BehaviorSubject } from 'rxjs';
import dotenv from 'dotenv';


import { handleResponse } from '../_helpers/';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage?localStorage.getItem('currentUser'):"{NaN}"));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'userName': username, 'password':  password })
    };
    let RUL = process.env.REST_URL;
    
    return fetch(`${RUL}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
           // console.log(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
           console.log(user);
         currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}