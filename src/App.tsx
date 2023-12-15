import "./components/Icon/Icon.tsx";
import Input from "./components/Input/Input.tsx";

function App() {
  return (
    <>
      <div className="pt-4 grid gap-4">
        <Input type="email" />
        <Input type="tel" />
        <Input type="number" />
        <Input type="text" />
      </div>
    </>
  );
}

export default App;
