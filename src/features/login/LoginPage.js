import React from "react";
import { useAuth } from "../../shared/UseAuth";

const LoginPage = () => {
    const {onLogin} = useAuth();
    const handleLogin = ()=>{
        onLogin('niq');
    }
  return( 
  <div>
    <h2>Login Page</h2>
    <button onClick={handleLogin} >login</button>
   
    </div>);

};

export default LoginPage;