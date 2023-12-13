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
};

export function Icon({ type, style = "w-7 aspect-square" }: IconProps) {
  return (
    <>
      <svg className={style}>
        <use href={`/sprite.svg#${type}`}></use>
      </svg>
    </>
  );
}
