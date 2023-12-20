type CheckboxProps = {
  label?: string;
};

export default function CheckboxInput({ label }: CheckboxProps) {
  return (
    <label className="font-handwriting text-2xl flex gap-2 items-center cursor-pointer">
      <input
        type="checkbox"
        className="appearance-none w-8 aspect-square border-none bg-[url(icons/checkbox--unchecked.svg)] cursor-pointer checked:bg-[url(icons/checkbox--checked.svg)] bg-no-repeat bg-contain"
      ></input>
      {label}
    </label>
  );
}
