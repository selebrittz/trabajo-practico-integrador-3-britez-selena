import { Navbar } from "./components/Navbar";
import { Loading } from "./components/Loading";
import { Footer } from "./components/Footer";
import { Register } from "./pages/Register";

export const App = () => {
  const isLoading = false;

  return (
    <>
      <Navbar />
      {isLoading ? <Loading /> : <p>¡Mi Api cargada!</p>}

      <Register />

      <Footer />
    </>
  );
};
