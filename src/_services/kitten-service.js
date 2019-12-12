import {handleResponse} from '../_helpers';
export const kittenService = {
    getAll,
    getById
};

let RUL="http://localhost:8000"


function getAll(){
    const requestOptions = { method: 'GET' };
    return fetch(`${RUL}/kittens`, requestOptions).then(handleResponse);

}
function getById(id){
    const requestOptions = { method: 'GET' };
    return fetch(`${RUL}/kittens/$id`, requestOptions).then(handleResponse);

}