import { ReactNode, forwardRef, useRef, useEffect } from "react";
import { Icon } from "../Icon/Icon";

const style = {
  success: "bg-spanishGreen",
  error: "bg-orangeRed",
  error2: "bg-supernova",
  info: "bg-silverLakeBlue",
};

type ModalProps = {
  type: keyof typeof style;
  children: ReactNode;
};

const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
  { children, type }: ModalProps,
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (ref) {
      if (typeof ref === "function") {
        ref(dialog.current);
      } else {
        ref.current = dialog.current;
      }
    }
  }, [ref]);

  return (
    <dialog
      ref={dialog}
      className={`backdrop:bg-[rgba(0,0,0,0.85)] ${style[type]} border-2 lg:border-8 border-white p-4 flex flex-col -z-50`}
    >
      <button
        type="button"
        onClick={() => dialog.current!.close()}
        className="self-end"
      >
        <Icon type="close" style="fill-white " />
        <span className="sr-only">close</span>
      </button>
      {children}
    </dialog>
  );
});

export default Modal;
