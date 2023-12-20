import { useState } from "react";
import { Icon } from "../Icon/Icon";

type PasswordInputProps = {
  id?: number;
};

export default function PasswordInput({ id }: PasswordInputProps) {
  let htmlId = "password";
  if (id) htmlId += id;

  const [isShowPassword, setIsShowPassword] = useState<Boolean>(false);

  return (
    <label className="w-full relative grid cursor-pointer">
      <input
        type={isShowPassword ? "text" : "password"}
        id={htmlId}
        name={htmlId}
        size={1}
        placeholder=" "
        className={`p-6 w-full font-sans text-[1.6875rem] peer invalid:bg-orangeRed transition-all [&::-ms-reveal]:hidden`}
        autoComplete="off"
      />
      <span className="absolute uppercase font-handwriting text-3xl font-bold p-6 transition-all peer-focus:p-1 peer-focus:text-lg peer-[&:not(:placeholder-shown)]:p-1 peer-[&:not(:placeholder-shown)]:text-lg peer-invalid:text-white peer-[&:not(:invalid):not(:placeholder-shown)]:text-spanishGreen">
        password
      </span>
      <button
        type="button"
        id="passwordButton"
        className="absolute self-center right-1 p-4"
        onClick={() => {
          setIsShowPassword((value) => !value);
        }}
      >
        <Icon type={isShowPassword ? "eyeClosed" : "eyeOpened"} />
      </button>
    </label>
  );
}
