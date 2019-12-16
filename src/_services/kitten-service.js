import {handleResponse} from '../_helpers';
export const kittenService = {
    getAll,
    getById
};


let RUL = process.env.REST_URL;


function getAll(){
    const requestOptions = { method: 'GET' };
    return fetch(`${RUL}/kittens`, requestOptions).then(handleResponse);

}
function getById(id){
    const requestOptions = { method: 'GET' };
    return fetch(`${RUL}/kittens/$id`, requestOptions).then(handleResponse);

}