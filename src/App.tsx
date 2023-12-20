import { useRef } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const modal = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div className="bg-silverTree p-16 min-h-screen">
        <Modal
          type="success"
          children={<div>Dddddddddddddddddada</div>}
          ref={modal}
        />
        <button type="button" onClick={() => modal.current!.showModal()}>
          SHOW MODAL
        </button>
      </div>
    </>
  );
}

export default App;
