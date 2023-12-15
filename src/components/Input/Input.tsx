const types = {
  text: ["text", ""],
  password: ["password", ""],
  email: ["email address", ""],
  url: ["url", ""],
  number: ["number", ""],
  tel: ["telephone", ""],
};

type inputProp = {
  type: keyof typeof types;
  id?: number;
};

export default function Input({ type, id }: inputProp) {
  let htmlId = type;
  if (id) htmlId += id;
  return (
    <>
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
          {types[type][0]}
        </span>
      </label>
    </>
  );
}
