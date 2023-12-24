import Authentication from "./Authentication";
import PasswordInput from "../../components/Input/PasswordInput";
import FileInput from "../../components/Input/FileInput";

export default function InviteAccept() {
  return (
    <Authentication title="sign up">
      <form action="" className="grid gap-4 w-full">
        <PasswordInput />
        <FileInput />
        <button
          type="submit"
          className="font-handwriting w-full bg-supernova py-5 rounded-full border-none text-3xl font-bold"
        >
          SUBMIT
        </button>
      </form>
    </Authentication>
  );
}
