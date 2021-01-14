import React, { useState } from 'react';
import { Form,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { registerUser } from '../actions/userActions';
import '../App.css';


 const SignUp = () => {
   const [signUp, setsignUp] = useState({
     firstName:'',
     lastName:'',
     email:'',
     password:''
   });

   const dispatch = useDispatch();

   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(signUp);
     dispatch(registerUser(signUp));
    clear();
   }

   const clear=()=>{
     setsignUp({
      firstName:'',
      lastName:'',
      email:'',
      password:''
     });
   }

    return (
        <div align="center" >
           
            <form onSubmit={handleSubmit}  style={{width:"400px",marginTop:"50px",borderBottom:"1px solid #bab7ab",padding:"20px",borderRadius:"10px"}}>
            <h3 style={{fontFamily:"helvetica"}}>Create Account</h3>
            <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control 
            name="firstName"
            value={signUp.firstName}
            onChange={(e)=>setsignUp({...signUp,firstName:e.target.value})}
            type="text" placeholder="First Name" required style={{width:"350px"}}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" 
            name="lastName"
            value={signUp.lastName}
            onChange={(e)=>setsignUp({...signUp,lastName:e.target.value})}
             placeholder="Last Name" required style={{width:"350px"}}/>
            </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" 
    name="email"
    value={signUp.email}
    onChange={(e)=>setsignUp({...signUp,email:e.target.value})}
    placeholder="Enter email" required style={{width:"350px"}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" 
    name="password" 
    value={signUp.password}
    onChange={(e)=>setsignUp({...signUp,password:e.target.value})}
    placeholder="Password" required style={{width:"350px"}}/>
  </Form.Group>
Already have an Account?&nbsp;<Link style={{color:'blue'}} to="/login">Login</Link>
<br /><br />
  <Button className="signup" 
  style={{color:"white",
  backgroundColor:"#533b5e",
  borderRadius:"7px",
  border:"#533b5e"}}
  type="submit">
    Sign Up
  </Button>
</form>
        </div>
    )
}
export default SignUp;