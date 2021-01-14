import React from 'react';
import { Navbar} from 'react-bootstrap';
import '../App.css';



 const Footer = () => {
    return (
        <div style={{marginTop:"100px"}} >
            <Navbar   sticky="bottom" bg="dark" variant="dark" className="justify-content-center">

<div style={{color:"white"}}> 
  Copyrights Reserved &copy;
</div>

  </Navbar>
        </div>
    )
}
export default Footer;