import React from 'react';
import { Card,Button,Container,Row,Col } from "react-bootstrap";
import  {FaShoppingCart}  from 'react-icons/fa';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import Data from './Data';
import Slider from './Slider';


 const Home = () => {
    return (
        
        <div align="center">
            <Slider />
        <h1 style={{marginTop:"20px",fontFamily:"Helvetica"}} align="center">Collections</h1>
        <Container style={{marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"60px"}}>
            <Row >
                {Data.products.map(products=>{
                    return (
                        <Col xs={12} md={3}>
                        <Card  style={{ width: '14rem',marginBottom:"20px",height:"450px" }}>
              <Card.Img variant="top" height="200px" src={products.image} />
            
              <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <Card.Text>
              {products.type}
              </Card.Text>
                <Card.Title >{products.title}</Card.Title>
                <Card.Title >${products.price}</Card.Title>
                <Rating/>
               <Link to={"/productdetails/"+products.id}> <Button 
                style={{backgroundColor:"rgba(255,0,0,1)",
                color:"white",border:0,marginBottom:"20px"}}>Add To Cart <FaShoppingCart style={{marginBottom:"3px",marginLeft:"3px"}}/>
                </Button></Link>
              </Card.Body>
            </Card>
            </Col>
                    )
                })};



</Row>

        </Container>




        </div>

    );
}
export default Home;