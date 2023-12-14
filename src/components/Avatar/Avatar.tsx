import { Icon, iconTypes } from "../Icon/Icon.tsx";
<div className="w6"></div>;
// key - size, 0-border, 1-text, [2, 3]-status[size, style], 4 - santa hat
const sizes = {
  "max-w-[6rem]": [
    "border-[6px]",
    "text-4xl",
    "max-w-[25%]",
    "border-2 right-[-0.125rem] bottom-[-0.125rem] p-[0.125rem]",
    "top-[-1.625rem] right-[-1.125rem] w-[4.1875rem]",
  ],
};

const statusType: { [key: string]: [(typeof iconTypes)[number], string] } = {
  online: ["check", "bg-spanishGreen fill-white"],
  idle: ["question", "bg-supernova fill-black"],
  "do-not-disturb": ["minus", "bg-orangeRed fill-white"],
};

type AvatarProp = {
  size?: keyof typeof sizes;
  border?: string;
  letter?: string;
  image?: string;
  icon?: (typeof iconTypes)[number];
  status?: "online" | "idle" | "do-not-disturb";
  isSantaHat?: boolean;
};

export default function Avatar({
  size = "max-w-[6rem]",
  letter,
  image,
  icon,
  status,
  isSantaHat,
}: AvatarProp) {
  if (icon) {
    return (
      <>
        <div
          className={`${size} aspect-square bg-spanishGreen rounded-full grid place-items-center ${sizes[size][0]} border-vistaBlue`}
        >
          <Icon type={icon} size="w-3/5" style="fill-white" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={`${size} aspect-square bg-spanishGreen rounded-full grid place-items-center ${sizes[size][0]} border-white text-white ${sizes[size][1]} font-bold font-sans relative`}
        >
          {!image && letter}
          {image && <img alt="" src={image} className="w-full"></img>}
          {status && (
            <Icon
              type={statusType[status][0]}
              size={sizes[size][2]}
              style={`${sizes[size][3]} ${statusType[status][1]} rounded-full absolute border-white`}
            />
          )}
          {isSantaHat && (
            <img
              alt=""
              src="/avatar/santa-hat.png"
              className={`absolute ${sizes[size][4]}`}
            ></img>
          )}
        </div>
      </>
    );
  }
}
