import { Icon } from "../Icon/Icon";

type inputProp = {
  type: "text" | "url" | "number" | "tel" | "file";
  id?: number;
};

export default function Input({ type = "text", id }: inputProp) {
  let htmlId = type;
  if (id) htmlId += id;
  return (
    <label className="w-full relative grid cursor-pointer">
      <input
        type={type}
        id={htmlId}
        name={htmlId}
        size={1}
        placeholder=" "
        className={`p-6 w-full font-sans text-[1.6875rem] peer invalid:bg-orangeRed transition-all`}
      />
      <span className="absolute uppercase font-handwriting text-3xl font-bold p-6 transition-all peer-focus:p-1 peer-focus:text-lg peer-[&:not(:placeholder-shown)]:p-1 peer-[&:not(:placeholder-shown)]:text-lg peer-invalid:text-white peer-[&:not(:invalid):not(:placeholder-shown)]:text-spanishGreen">
        {type}
      </span>
    </label>
  );
}
