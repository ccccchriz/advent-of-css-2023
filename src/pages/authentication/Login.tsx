import { Link } from "react-router-dom";
import Authentication from "./Authentication";
import PasswordInput from "../../components/Input/PasswordInput";
import EmailInput from "../../components/Input/EmailInput";

export default function Login() {
  return (
    <Authentication title="login">
      <form action="" className="grid gap-4 w-full">
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
        to="/register"
        className="text-2xl font-sans underline font-medium  dark:text-white mb-8"
      >
        Need an account?
      </Link>
    </Authentication>
  );
}
