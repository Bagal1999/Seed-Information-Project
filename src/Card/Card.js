import React from "react";
import "./Card.css";
function Card(props){
    return(
<>

       
    <div  className="cards">
        
        
        <div className="card">
        <h3 className="card_title">{props.title}</h3>
     <img src={props.imgsrc}  className="card_image"></img>
  <div >
  <div>
   
    
       <a href={props.link}>
    <button type="submit" className="button">watch</button>

</a>
</div>
</div>
</div>
</div>
 </>   
    );
}
export default Card;    