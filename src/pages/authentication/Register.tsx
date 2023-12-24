import { Link } from "react-router-dom";
import Authentication from "./Authentication";
import PasswordInput from "../../components/Input/PasswordInput";
import EmailInput from "../../components/Input/EmailInput";
import Input from "../../components/Input/Input";

export default function Register() {
  return (
    <Authentication title="sign up">
      <form action="" className="grid gap-4 w-full">
        <Input type="text" title="name" />
        <EmailInput />
        <PasswordInput />
        <button
          type="submit"
          className="font-handwriting w-full bg-supernova py-5 rounded-full border-none text-3xl font-bold"
        >
          SUBMIT
        </button>
      </form>
      <Link
        to="/login"
        className="text-2xl font-sans underline font-medium  dark:text-white mb-8"
      >
        Ready to login?
      </Link>
    </Authentication>
  );
}
