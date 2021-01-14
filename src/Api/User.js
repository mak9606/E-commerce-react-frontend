import axios from 'axios';

const url="http://localhost:5000/users";

export const registerUser=(user)=>axios.post(`${url}/register`,user);

 export const loginUser=(user)=>axios.post(`${url}/signin`,user);

