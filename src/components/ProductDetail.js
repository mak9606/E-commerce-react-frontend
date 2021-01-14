import React, { useState } from 'react';
import { Row,Col,Button,Container } from "react-bootstrap";
import Shirt from '../images/shirt.jpg';
import "../App.css";
import { Typography } from "@material-ui/core";
import  {FaMoneyBill}  from 'react-icons/fa';
import Data from './Data';

 const ProductDetail = (props) => {
     const [qtyValue, setQtyValue] = useState(1);
     const {image,type,title,price}=Data.products.find(x=>x.id===props.match.params.id);
    return (
        
        <div align="center" style={{marginTop:"50px",marginBottom:"200px"}}>
            <Container>
                <Row>
                <Col xs={12} md={7} style={{padding:"20px",marginBottom:"30px"}}>
                    <img src={image} alt="slim Shirt" width="250px" height="250px"/>
                </Col>
                <Col xs={12} md={5}>
                <Typography align="left" variant="h4" style={{marginBottom:"20px",marginLeft:"10px"}}>{title}</Typography>
                    <Typography align="left" variant="h6" style={{marginBottom:"20px",marginLeft:"10px"}}>Description</Typography>
                    <Typography align="left" variant="body1"  style={{marginBottom:"80px",marginLeft:"10px"}}>This is a very high quality product with unique design and you
                        will be please to use this product.This is a very high quality product with unique design and you
                        will be please to use this product.This is a very high quality product with unique design and you
                        will be please to use this product.This is a very high quality product with unique design and you
                        will be please to use this product
                    </Typography>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:"flex"}}>
                        <button className="qty" onClick={()=>qtyValue<=1?1:setQtyValue(qtyValue-1)}>-</button>
                        <form ><input type="text" value={qtyValue}  className="input"/></form>
                        <button className="qty" onClick={()=>setQtyValue(qtyValue+1)}>+</button>
                        </div>
                        <div>
                        <Button 
                style={{backgroundColor:"rgba(255,0,0,1)",
                color:"white",border:0,marginRight:"10px",height:"50px"}}>Checkout <FaMoneyBill style={{marginBottom:"3px",marginLeft:"3px"}}/>
                </Button>
                </div>
                    </div>
                </Col>
                </Row>
                </Container>
        </div>
    )
}
export default ProductDetail;