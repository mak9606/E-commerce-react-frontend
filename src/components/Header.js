import React from 'react';
import { Navbar,NavDropdown,Nav,Button,Form} from 'react-bootstrap';
import { Link } from "react-router-dom";

 const Header = () => {
    return (
        <div>
                 
      <Navbar bg="dark" variant="dark" expand="lg">
 
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">

 <Link to="/">  <Navbar.Brand >E-Commerce Store  </Navbar.Brand> </Link>
   
   <Nav  className="mr-sm-4" >
   <Link to="/"> <Nav.Link  href="#home">Home</Nav.Link></Link>
     
     <NavDropdown title="Product" id="basic-nav-dropdown">
      <NavDropdown.Item >Shirts </NavDropdown.Item>
       <NavDropdown.Item href="#action/3.2">Pants</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.3">Women Jewellery/Menwear</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.4">Watches</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.4">Bags</NavDropdown.Item>
     </NavDropdown>
     
   <Nav.Link href="#link">About</Nav.Link>

   </Nav>
     <Form inline>
    <Link to="/login"><Button variant="dark">Login</Button></Link> &emsp;

     <Link to="/signup"><Button variant="dark">Sign up</Button></Link>
     </Form>
       
     

  
 </Navbar.Collapse>

</Navbar>
        </div>
    )
}
export default Header;