import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const username = storedUser ? storedUser.username : "Usuario";

  return (
    <>
      <Navbar />
      <h1>Bienvenido, {username}</h1>
      <Footer />
    </>
  );
};
