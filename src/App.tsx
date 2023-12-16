import Footer from "./components/Footer/Footer.tsx";
import Authentication from "./pages/authentication/Authentication.tsx";

function App() {
  return (
    <>
      <Authentication type="login" />
      <Footer />
    </>
  );
}

export default App;
