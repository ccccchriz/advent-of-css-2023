type EmailInputProps = {
  id?: number;
};

export default function EmailInput({ id }: EmailInputProps) {
  let htmlId = "email";
  if (id) htmlId += id;

  return (
    <label className="w-full relative grid cursor-pointer">
      <input
        type="email"
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
}
