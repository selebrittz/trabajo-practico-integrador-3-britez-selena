import { useState } from "react";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
   const [isLogged, setIsLogged] = useState(false)
   
   const handleLogin = () => setIsLogged (true)

   const handleLogout = () => setIsLogged (false)


  return (
    <>
      <AppRouter isLogged = {isLogged} onLogin={handleLogin} onLogout= {handleLogout} />
    </>
  );
};
