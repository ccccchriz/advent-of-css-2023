import { useState } from "react";
import { Icon } from "../Icon/Icon";

type inputProp = {
  type: "text" | "url" | "number" | "tel" | "email" | "password";
  id?: number;
};

export default function Input({ type = "text", id }: inputProp) {
  let htmlId = type;
  if (id) htmlId += id;
  if (type == "email") {
    return (
      <label className="w-full relative grid">
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
  } else if (type == "password") {
    const [t, setT] = useState("password");
    const [i, setI] = useState<"eyeClosed" | "eyeOpened">("eyeClosed");
    return (
      <label className="w-full relative grid">
        <input
          type={t}
          id={htmlId}
          name={htmlId}
          size={1}
          placeholder=" "
          className={`p-6 w-full font-sans text-[1.6875rem] peer invalid:bg-orangeRed transition-all [&::-ms-reveal]:hidden`}
          autoComplete="off"
        />
        <span className="absolute uppercase font-handwriting text-3xl font-bold p-6 transition-all peer-focus:p-1 peer-focus:text-lg peer-[&:not(:placeholder-shown)]:p-1 peer-[&:not(:placeholder-shown)]:text-lg peer-invalid:text-white peer-[&:not(:invalid):not(:placeholder-shown)]:text-spanishGreen">
          {type}
        </span>
        {type == "password" && (
          <button
            type="button"
            id="passwordButton"
            className="absolute self-center right-1 p-4"
            onClick={() => {
              const inp = document.getElementById(htmlId);
              if (inp?.getAttribute("type") == "text") {
                setT("password");
                setI("eyeClosed");
              } else {
                setT("text");
                setI("eyeOpened");
              }
            }}
          >
            <Icon type={i} />
          </button>
        )}
      </label>
    );
  } else {
    return (
      <label className="w-full relative grid">
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
