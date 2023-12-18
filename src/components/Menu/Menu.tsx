import { useEffect, useState, useRef } from "react";
import MenuButton from "./MenuButton";

export default function Menu() {
  const [isExpanded, setIsExpanded] = useState(false);

  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleDisableMenu = (e: KeyboardEvent) => {
      if (isExpanded == true && e.key == "Escape") {
        if (button.current != null) button.current.focus();
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleDisableMenu);

    return () => document.removeEventListener("keydown", handleDisableMenu);
  }, [isExpanded]);

  return (
    <>
      <div className="lg:max-w-md grid">
        <div
          className={`p-4 z-50 right-0 md:left-0 w-min ${
            isExpanded ? "fixed" : "absolute"
          }`}
        >
          <MenuButton
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            ref={button}
          />
        </div>
        <div
          className={`w-full md:max-w-sm min-h-[100dvh] bg-supernova z-40 fixed top-0 flex flex-col box-border transition-all duration-300 ${
            isExpanded ? "menuSlideIn" : "menuSlideIn--reverse"
          }`}
        >
          <nav className="w-full mt-16 flex flex-col text-6xl px-6 gap-4 font-condensed">
            <a href="">DASHBOARD</a>
            <a href="">OUR EVENT</a>
            <a href="">MY WISH LIST</a>
          </nav>
          <div className="w-full flex flex-col px-6 mt-auto mb-8">
            <span className="font-condensed text-spanishGreen text-5xl mb-4">
              PAST EVENTS
            </span>
            <span className="font-sans font-bold text-3xl">
              Balthis Christmas
            </span>
            <span className="font-sans">23 December 2023</span>
          </div>
        </div>
      </div>
    </>
  );
}
