import { Icon } from "../Icon/Icon";

type inputProp = {
  type: "text" | "url" | "number" | "tel" | "email" | "file";
  id?: number;
};

export default function Input({ type = "text", id }: inputProp) {
  let htmlId = type;
  if (id) htmlId += id;
  if (type == "email") {
    return (
      <label className="w-full relative grid cursor-pointer">
        <input
          type={type}
          id={htmlId}
          name={htmlId}
          size={1}
          placeholder=" "
          className={`p-6 w-full font-sans text-[1.6875rem] peer invalid:bg-orangeRed transition-all`}
          pattern="^\S+@\S+\.\S+$"
        />
        <span className="absolute uppercase font-handwriting text-3xl font-bold p-6 transition-all peer-focus:p-1 peer-focus:text-lg peer-[&:not(:placeholder-shown)]:p-1 peer-[&:not(:placeholder-shown)]:text-lg peer-invalid:text-white peer-[&:not(:invalid):not(:placeholder-shown)]:text-spanishGreen">
          email
        </span>
      </label>
    );
  } else if (type == "file") {
    return (
      <label className="w-full relative grid cursor-pointer items-center border-8 border-dashed border-white">
        <input
          type={type}
          id={htmlId}
          name={htmlId}
          size={1}
          placeholder=" "
          className={`p-6 w-full text-[1.6875rem] opacity-0 cursor-pointer`}
        />
        <span className="w-full absolute p-6 flex justify-between items-center">
          <span className="uppercase font-handwriting text-3xl text-white font-bold">
            avatar
          </span>
          <span className="text-2xl font-sans text-slate-500">
            Click to add image
          </span>
          <Icon type="upload" size="w-12" style="fill-white" />
        </span>
      </label>
    );
  } else {
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
}
