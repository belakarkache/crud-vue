import axios from 'axios';

export const getUsers = axios.get('https://607b6bf967e6530017573145.mockapi.io/api/v1/users').then((resp) => resp.data);
export const getCountries = axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/paises').then((resp) => resp.data);
export const getAvatars = axios.get('https://rickandmortyapi.com/api/character').then((resp) => resp.data);
export const addUser = (data) => axios.post('https://607b6bf967e6530017573145.mockapi.io/api/v1/users', data);
export const removeUser = (data) => axios.delete(`https://607b6bf967e6530017573145.mockapi.io/api/v1/users/${data}`);
export const updateUser = (id, data) => axios.put(`https://607b6bf967e6530017573145.mockapi.io/api/v1/users/${id}`, data);