import React, { useState } from 'react';
import { Form,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import '../App.css';
import { loginUser } from '../actions/userActions';


 const Login = () => {
   const [logIn, setLogIn] = useState({
     email:'',
     password:''
   });

   const dispatch = useDispatch();

   const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(loginUser(logIn));
    clear();
   }

   const clear=()=>{
     setLogIn({
      email:'',
      password:''
    });
   }
    return (
        <div align="center" style={{height:"420px"}} >
            <form onSubmit={handleSubmit}  style={{width:"400px",marginTop:"100px",borderBottom:"1px solid #bab7ab",padding:"20px",borderRadius:"10px"}}>
  <h3 style={{fontFamily:"helvetica"}}>Login</h3>
  <Form.Group  controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"
    name="email"
    value={logIn.email}
    onChange={(e)=>setLogIn({...logIn,email:e.target.value})}
    placeholder="Enter email"  required style={{width:"350px"}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group  controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"
    name="password"
    value={logIn.password}
    onChange={(e)=>setLogIn({...logIn,password:e.target.value})}
     placeholder="Password"  required style={{width:"350px"}}/>
  </Form.Group>
 Don't have an Account?&nbsp;<Link style={{color:'blue'}} to='/signup'>Create Account</Link>
 <br /><br />
 <Button className="signup" 
  style={{color:"white",
  backgroundColor:"#533b5e",
  borderRadius:"7px",
  border:"#533b5e"}} type="submit">
    Login
  </Button>
</form>
        </div>
    )
}
export default Login;