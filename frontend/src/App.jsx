import { Navbar } from "./components/Navbar";
import { Loading } from "./components/Loading";
import { Footer } from "./components/Footer";

export const App = () => {
  const isLoading = false;

  return (
    <>
      <Navbar />
      {isLoading ? <Loading /> : <p>¡Mi Api cargada!</p>}

      <Footer />
    </>
  );
};
