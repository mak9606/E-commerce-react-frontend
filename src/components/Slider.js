import {React,useState} from 'react';
import { Carousel } from "react-bootstrap";
import Sale from '../images/slider1.jpg';   
import Sales from '../images/slider2.jpg';
import Shopping from '../images/slider3.jpg';
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sales}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sale}
            alt="Second slide"
          />
  

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Shopping}
            alt="Third slide"
          />
  

        </Carousel.Item>
      </Carousel>
    );
  }
  
 
 const Slider = () => {
    return (
        <div>
            <ControlledCarousel />;
        </div>
    )
}
export default Slider;