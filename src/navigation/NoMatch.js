import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
    const navigate = useNavigate();

    
  return( 
  <div>
    <h2>Failed Request</h2>
    <button onClick={()=>{navigate('/')}}>Go back</button>
   
    </div>);

};

export default NoMatch;