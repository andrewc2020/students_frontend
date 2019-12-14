import {handleResponse} from '../_helpers';
export const kittenService = {
    getAll,
    getById
};





function getAll(){
    const requestOptions = { method: 'GET' };
    return fetch('/kittens', requestOptions).then(handleResponse);

}
function getById(id){
    const requestOptions = { method: 'GET' };
    return fetch(`/kittens/$id`, requestOptions).then(handleResponse);

}