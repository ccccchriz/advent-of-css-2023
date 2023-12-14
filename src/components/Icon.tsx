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

export default function Icon({
  type,
  size = "w-7 aspect-square",
  style,
}: IconProps) {
  return (
    <>
      <svg className={`${size} ${style}`}>
        <use href={`/sprite.svg#${type}`}></use>
      </svg>
    </>
  );
}
