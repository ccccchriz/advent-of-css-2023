import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import { Icon } from "../../components/Icon/Icon";
import PasswordInput from "../../components/Input/PasswordInput";
import EmailInput from "../../components/Input/EmailInput";
import FileInput from "../../components/Input/FileInput";

export const authComponents = {
  //
  // login
  //
  login: {
    title: "login",
    node: (
      <>
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
      </>
    ),
  },
  //
  // register
  //
  register: {
    title: "sign up",
    node: (
      <>
        <form action="" className="grid gap-4 w-full">
          <Input type="text" />
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
      </>
    ),
  },
  //
  // Invite
  //
  invite: {
    title: "you're invited to",
    node: (
      <>
        <h3 className="text-8xl text-white uppercase text-center font-condensed">
          smith christmas
        </h3>
        <p className="text-white uppercase text-center text-3xl font-handwriting">
          23 december 2023
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-4 mb-24">
          <Link
            to="decline"
            className=" grid grid-cols-[auto_1fr] items-center"
          >
            <Icon
              type="thumbsDown"
              size="w-24"
              style="bg-orangeRed rounded-full z-10 p-4 fill-white border-4 border-white"
            />
            <span className="bg-white text-3xl font-sans font-bold pl-14 -ml-12 min-h-[5.5rem] flex items-center">
              Regretfully Decline
            </span>
          </Link>
          <Link to="accept" className=" grid grid-cols-[auto_1fr] items-center">
            <Icon
              type="thumbsUp"
              size="w-24"
              style="bg-spanishGreen rounded-full z-10 p-4 fill-white border-4 border-white"
            />
            <span className="bg-white text-3xl font-sans font-bold pl-14 -ml-12 py-2 min-h-[5.5rem] flex items-center">
              I'll Be There!
            </span>
          </Link>
        </div>
      </>
    ),
  },
  //
  // login
  //
  decline: {
    title: "thanks",
    node: (
      <>
        <h2 className="font-condensed text-[5rem] text-white mt-4 mb-16 uppercase text-center">
          you'll be missed
        </h2>
      </>
    ),
  },
  //
  // login
  //
  accept: {
    title: "sign up",
    node: (
      <>
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
      </>
    ),
  },
};
