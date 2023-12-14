import Avatar from "./components/Avatar/Avatar.tsx";
import "./components/Icon/Icon.tsx";

function App() {
  return (
    <>
      <div className="pt-12 grid grid-cols-5 ">
        <Avatar letter="A" />
        <Avatar image="/avatar/img/avatar-08.png" />
        <Avatar
          image="/avatar/img/avatar-06.png"
          status="idle"
          isSantaHat={true}
        />
        <Avatar icon="eyeClosed" />
        <Avatar image="/avatar/img/avatar-03.png" isSantaHat={true} />
      </div>
    </>
  );
}

export default App;
