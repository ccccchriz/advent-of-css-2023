import { useRef, useState, useEffect } from "react";
import { Icon } from "../Icon/Icon.tsx";

type UseInfoProp = {
  avatar: string;
};

export default function UserInfo({ avatar }: UseInfoProp) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleDisableMenu = (e: KeyboardEvent) => {
      if (isExpanded == true && e.key == "Escape") {
        if (button.current != null) button.current.focus();
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleDisableMenu);

    return () => {
      document.removeEventListener("keydown", handleDisableMenu);
    };
  }, [isExpanded]);

  return (
    <>
      <button
        aria-expanded={isExpanded}
        type="button"
        className="flex items-center gap-3"
        onClick={() => setIsExpanded((value) => !value)}
        ref={button}
      >
        <Icon type="chevron" />
        <img src={avatar} alt="" className="border-2 border-white"></img>
        <p className="flex flex-col text-left font-sans">
          <span className="sr-only">user options</span>
          <span className="text-sm">Logged in as</span>
          <strong className="text-xl">Cody Fisher</strong>
        </p>
      </button>
      <nav
        className={`top-24 right-6 bg-white p-4  ${
          isExpanded ? "absolute" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3">
          <li>
            <a href="" className="flex gap-4 text-3xl font-condensed">
              <Icon type="user" style="fill-pastelMagenta" />
              <span>MY ACOOUNT</span>
            </a>
          </li>
          <li>
            <a href="" className="flex gap-4 text-3xl font-condensed">
              <Icon type="calendar" style="fill-pastelMagenta" />
              <span>MY EVENT</span>
            </a>
          </li>
          <li>
            <a href="" className="flex gap-4 text-3xl font-condensed">
              <Icon type="logout" style="fill-pastelMagenta" />
              <span>LOGOUT</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
