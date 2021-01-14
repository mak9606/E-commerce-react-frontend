import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import '../App.css';

const Rating=()=>{
    const [provideRatings, setprovideRatings] = useState(null);
    const [onHover, setonHover] = useState(null);
    return(
        <div>
        {[...Array(5)].map((star,i)=> {
            const ratingValue=i+1;
       return (
           
           <label>
               <input 
               type="radio" 
               name="rating" 
               value={ratingValue}
               onClick={()=>setprovideRatings(ratingValue)}
                style={{display:"none"}}

                />
                
       < FaStar className="star" 
       color="#ffc107"
       onMouseEnter={()=>setonHover(ratingValue)}
       onMouseLeave={()=>setonHover(null)}/>
       </label>
       )
        })}
    
       </div>
    );
}

export default Rating;

// color={ratingValue<=(onHover||provideRatings)?'#ffc107':'e4e5e9'}