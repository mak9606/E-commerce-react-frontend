import * as api from '../Api/User';
import { ADD_NEW_USER, LOGIN } from '../constants';

export const registerUser=(user)=>async (dispatch)=>{
    try {
       
        const {data}=await api.registerUser(user);
       
        dispatch({type:ADD_NEW_USER,payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const loginUser=(userLogin)=>async (dispatch)=>{
    try {
        const {data}=await api.loginUser(userLogin);
        dispatch({type:LOGIN,payload:data});
    } catch (error) {
        console.log(error);
    }
}