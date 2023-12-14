const types = [
  "calendar",
  "check",
  "chevron",
  "close",
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
  type: (typeof types)[number];
  style?: string;
  size?: string;
};

export default function Icon({ type, size = "w-7", style }: IconProps) {
  return (
    <>
      <svg className={`${size} aspect-square ${style}`}>
        <use href={`/sprite.svg#${type}`}></use>
      </svg>
    </>
  );
}
