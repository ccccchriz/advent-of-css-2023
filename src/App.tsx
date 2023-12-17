import Footer from "./components/Footer/Footer.tsx";
import Menu from "./components/Menu/Menu.tsx";
import Authentication from "./pages/authentication/Authentication.tsx";

function App() {
  return (
    <>
      <Menu />
      <Authentication type="login" />
      <Footer />
    </>
  );
}

export default App;
