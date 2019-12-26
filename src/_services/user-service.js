
import { authHeader, handleResponse } from '../_helpers';

export const userService = {
    getAll,
    getById,
    getCurrentUser
};

let RUL = process.env.REST_URL;

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://${RUL}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://${RUL}/users/${id}`, requestOptions).then(handleResponse);
}

function getCurrentUser(){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://${RUL}/user/current`, requestOptions).then(handleResponse);
}