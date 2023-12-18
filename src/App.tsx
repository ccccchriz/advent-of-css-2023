import Footer from "./components/Footer/Footer.tsx";
import Menu from "./components/Menu/Menu.tsx";
import UserInfo from "./components/UserInfo/UserInfo.tsx";
import Authentication from "./pages/authentication/Authentication.tsx";

function App() {
  return (
    <>
      <Menu />
      <div className="flex w-full justify-end -ml-8 mt-4">
        <UserInfo avatar="avatar/img/avatar-01.png" />
      </div>
      {/* <Authentication type="login" /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
