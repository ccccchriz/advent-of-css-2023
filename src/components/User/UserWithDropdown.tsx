import { useRef, useState, useEffect } from "react";
import { Icon } from "../Icon/Icon.tsx";
import Avatar from "../Avatar/Avatar.tsx";

type UseInfoProp = {
  avatar: string;
  name: string;
};

export default function UserInfo({ avatar, name }: UseInfoProp) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const button = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  const handleKeyboardDisableMenu = (e: KeyboardEvent) => {
    if (isExpanded == true && e.key == "Escape") {
      if (button.current != null) button.current.focus();
      setIsExpanded(false);
    }
  };

  const handleMouseDisableMenu = (e: MouseEvent) => {
    if (menu.current && !menu.current.contains(e.target as Node))
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
      <div ref={menu}>
        <button
          aria-expanded={isExpanded}
          type="button"
          className="flex items-center gap-3"
          onClick={() => setIsExpanded((value) => !value)}
          ref={button}
        >
          <Icon type="chevron" style="dark:fill-white" />
          <Avatar image={avatar} size="max-w-[3.75rem]" />
          <p className="flex flex-col text-left font-sans dark:text-white">
            <span className="sr-only">user options</span>
            <span className="text-sm">Logged in as</span>
            <strong className="text-xl">{name}</strong>
          </p>
        </button>
        <nav
          className={`top-24 right-6 bg-white p-4 dark:bg-blackPearl dark:text-white z-50 ${
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
      </div>
    </>
  );
}
