import { useEffect, useState, useRef, ReactNode } from "react";
import MenuButton from "../Menu/MenuButton";
import { Icon } from "../Icon/Icon";

type SlideInPanelProps = {
  children?: ReactNode;
};

function SlideInPanel({ children }: SlideInPanelProps) {
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
      <div className="lg:max-w-md grid absolute">
        <div className={`p-4 z-50 left-0 w-min`}>
          <MenuButton
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            ref={button}
          />
        </div>
        <div
          className={`right-0 w-full md:max-w-[45rem] min-h-[100dvh] bg-spanishGreen z-40 fixed top-0 flex flex-col transition-all duration-300 ${
            isExpanded ? "panelSlideIn" : "panelSlideIn--reverse"
          }`}
        >
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="p-4 self-end"
          >
            <Icon type="close" size="w-12" />
            <span className="sr-only">close</span>
          </button>
          {children}
        </div>
      </div>
    </>
  );
}

export default SlideInPanel;
