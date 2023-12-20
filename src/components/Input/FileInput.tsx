import { Icon } from "../Icon/Icon";

type FileInputProps = {
  id?: number;
};

export default function FileInput({ id }: FileInputProps) {
  let htmlId = "file";
  if (id) htmlId += id;

  return (
    <label className="w-full relative grid cursor-pointer items-center border-8 border-dashed border-white">
      <input
        type="file"
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
        <span className="text-2xl font-sans text-bombay">
          Click to add image
        </span>
        <Icon type="upload" size="w-12" style="fill-white" />
      </span>
    </label>
  );
}
