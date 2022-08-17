import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../shared/UseAuth";

const Navigation = () => {
    const {onLogout} = useAuth();
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <div style={{
        width:'20%',
        backgroundColor: 'cadetblue',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        gap:'5px',
        padding:'5px'
      }}>
        <h2>Navigation</h2>
        
          <Link to="page1">Page1</Link>
        
          <Link to="page2">Page 2</Link>
          <button onClick={onLogout}>Logout</button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
