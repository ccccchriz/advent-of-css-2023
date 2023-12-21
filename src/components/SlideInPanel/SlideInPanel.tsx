import { useEffect, useState, useRef, ReactNode } from "react";
import { Icon } from "../Icon/Icon";

type SlideInPanelProps = {
  children?: ReactNode;
};

function SlideInPanel({ children }: SlideInPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const panel = useRef<HTMLDivElement>(null);

  const handleKeyboardDisableMenu = (e: KeyboardEvent) => {
    if (isExpanded == true && e.key == "Escape") {
      setIsExpanded(false);
    }
  };

  const handleMouseDisableMenu = (e: MouseEvent) => {
    if (panel.current && !panel.current.contains(e.target as Node))
      setIsExpanded(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardDisableMenu);
    document.addEventListener("click", handleMouseDisableMenu);

    return () => {
      document.removeEventListener("keydown", handleKeyboardDisableMenu);
      document.removeEventListener("click", handleMouseDisableMenu);
    };
  }, [isExpanded]);

  return (
    <>
      <div className="lg:max-w-md grid absolute" ref={panel}>
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
