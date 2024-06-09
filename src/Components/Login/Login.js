import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <div className="login-container">
        <img src="" alt="Logo de iNFiNiTiX" className="logo"/>
        <h1>iNFiNiTiX</h1>
        <p>
          Inicia Sesión para acceder a todas las funciones de la aplicación
        </p>
        
      </div>

      <button onClick={() => loginWithRedirect()} className="login-btn">Log In</button>
    </div>
  )
  
};

export default LoginButton;