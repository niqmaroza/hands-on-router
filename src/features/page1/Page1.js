import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Page1 = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        return()=>{
            console.log('Unmounting page 1');
        }
    })


  return( 
  <div>
    <h2>
    Page 1
    </h2>
    <button onClick={()=>{
        navigate('child1-1')
    }}>Tochild1</button>
    <button onClick={()=>{
        navigate('child1-2')
    }}>Tochild1</button>
   <Outlet/>
    {/* <Link to='/'>Back</Link> */}
    </div>);

};

export default Page1;
