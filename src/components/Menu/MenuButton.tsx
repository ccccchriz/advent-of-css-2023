import { forwardRef } from "react";

type menuButtonProps = {
  isExpanded: boolean;
  setIsExpanded: Function;
};

const MenuButton = forwardRef<HTMLButtonElement, menuButtonProps>(
  function MenuButton({ isExpanded, setIsExpanded }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        aria-expanded={`${isExpanded}`}
        className="w-8 aspect-square bg-supernova grid place-items-center"
        onClick={() => {
          setIsExpanded((value: boolean) => !value);
        }}
      >
        <span className="sr-only">menu</span>
        <div
          className={`w-5 h-1 bg-black absolute -translate-y-2 transition-all duration-300 ${
            isExpanded ? "menuButton1" : "menuButton1--reverse"
          }`}
        ></div>
        <div
          className={`w-5 h-1 bg-black absolute ${isExpanded ? "hidden" : ""}`}
        ></div>
        <div
          className={`w-5 h-1 bg-black absolute translate-y-2 transition-all duration-300 ${
            isExpanded ? "menuButton3" : "menuButton3--reverse"
          }`}
        ></div>
      </button>
    );
  }
);

export default MenuButton;
