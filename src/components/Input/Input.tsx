import { useRef } from "react";

type inputProp = {
  type: "text" | "url" | "number" | "tel";
  id?: number;
  inFront?: string;
  title?: string;
  value?: string;
  size?: keyof typeof sizes;
  onChange?: Function;
};

const sizes = {
  default: {
    fontSize: "text-3xl",
    padding: "p-6",
  },
  small: {
    fontSize: "text-lg",
    padding: "p-4",
  },
};

export default function Input({
  type = "text",
  id,
  inFront,
  title,
  value,
  size = "default",
  onChange,
}: inputProp) {
  const htmlId = id ? `${type}${id}` : type;
  const inputElement = useRef<HTMLInputElement>(null);

  return (
    <label className={`w-full flex cursor-pointer ${sizes[size].fontSize}`}>
      {inFront && (
        <span
          className={`font-handwriting font-bold bg-white ${sizes[size].padding}`}
        >
          {inFront}
        </span>
      )}
      <input
        type={type}
        id={htmlId}
        name={htmlId}
        size={1}
        value={value}
        className={`${sizes[size].padding} w-full font-sans relative`}
        ref={inputElement}
        onInput={() =>
          onChange && onChange(id, type, inputElement.current!.value)
        }
      />
      {title != "none" && (
        <span
          className={`${sizes[size].padding} absolute uppercase font-handwriting font-bold transition-all `}
        >
          {title || type}
        </span>
      )}
    </label>
  );
}
