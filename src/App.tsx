import "./components/Icon.tsx";
import { Icon } from "./components/Icon.tsx";

function App() {
  return (
    <>
      <Icon type="calendar" style="w-7 aspect-square fill-red-300" />
      <Icon type="check" style="w-7 aspect-square fill-red-600" />
      <Icon type="chevron" style="w-7 aspect-square fill-red-900" />
      <Icon type="close" style="w-7 aspect-square fill-red-500" />
      <Icon type="eyeClosed" style="w-7 aspect-square fill-green-500" />
      <Icon type="eyeOpened" style="w-7 aspect-square fill-blue-500" />
      <Icon type="logout" style="w-7 aspect-square fill-red-500" />
      <Icon type="minus" style="w-7 aspect-square fill-red-500" />
      <Icon type="plus" style="w-7 aspect-square fill-red-500" />
      <Icon type="question" style="w-7 aspect-square fill-red-500" />
      <Icon type="thumbsDown" style="w-7 aspect-square fill-red-500" />
      <Icon type="thumbsUp" style="w-7 aspect-square fill-red-500" />
      <Icon type="upload" style="w-7 aspect-square fill-red-500" />
      <Icon type="user" />
    </>
  );
}

export default App;
