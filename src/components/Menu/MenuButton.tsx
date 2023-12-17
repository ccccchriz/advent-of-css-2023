import { useState, useRef } from "react";

export default function MenuButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  let firstRender = useRef(true);

  console.log(firstRender);

  const ret = (
    <button
      type="button"
      aria-expanded={`${isExpanded}`}
      className="w-8 aspect-square bg-supernova grid place-items-center"
      onClick={() => setIsExpanded((value) => !value)}
    >
      <span className="sr-only">menu</span>
      <div
        className={`w-5 h-1 bg-black absolute -translate-y-2 ${
          firstRender.current
            ? ""
            : isExpanded
            ? "menuButton1"
            : "menuButton1--reverse"
        }`}
      ></div>
      <div
        className={`w-5 h-1 bg-black absolute ${
          firstRender.current ? "" : isExpanded ? "hidden" : ""
        }`}
      ></div>
      <div
        className={`w-5 h-1 bg-black absolute translate-y-2 ${
          firstRender.current
            ? ""
            : isExpanded
            ? "menuButton3"
            : "menuButton3--reverse"
        }`}
      ></div>
    </button>
  );

  firstRender.current = false;

  return ret;
}
