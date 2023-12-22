export const iconTypes = [
  "calendar",
  "check",
  "chevron",
  "close",
  "edit",
  "eyeClosed",
  "eyeOpened",
  "logout",
  "minus",
  "plus",
  "question",
  "thumbsDown",
  "thumbsUp",
  "upload",
  "user",
] as const;

type IconProps = {
  type: (typeof iconTypes)[number];
  style?: string;
  size?: string;
};

export function Icon({ type, size = "w-7", style }: IconProps) {
  return (
    <>
      <svg className={`${size} aspect-square ${style}`}>
        <use href={`icons/sprite.svg#${type}`}></use>
      </svg>
    </>
  );
}
