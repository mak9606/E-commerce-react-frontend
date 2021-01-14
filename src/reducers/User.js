import { ADD_NEW_USER, LOGIN } from "../constants";

export default (user=[],action)=>{
switch(action.type)
{
case ADD_NEW_USER:
    return [...user,action.payload];
case LOGIN:
    return [...user,action.payload];
default:
    return user;
}
}