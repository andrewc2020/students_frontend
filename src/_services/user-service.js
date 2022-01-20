
import { authHeader, handleResponse } from '../_helpers';
import {dotenv} from 'dotenv'

export const userService = {
    getAll,
    getById,
    getCurrentUser
};

let RUL = process.env.REST_URL;
console.log(`${RUL}`)

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${RUL}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${RUL}/users/${id}`, requestOptions).then(handleResponse);
}

function getCurrentUser(){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${RUL}/user/current`, requestOptions).then(handleResponse);
}