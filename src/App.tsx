import Footer from "./components/Footer/Footer.tsx";
import MenuButton from "./components/Menu/MenuButton.tsx";
import Authentication from "./pages/authentication/Authentication.tsx";

function App() {
  return (
    <>
      {/* <Authentication type="login" />
      <Footer /> */}
      <div className="p-14">
        <MenuButton />
      </div>
    </>
  );
}

export default App;
