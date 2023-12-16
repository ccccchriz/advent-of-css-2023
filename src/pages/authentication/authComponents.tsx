import Input from "../../components/Input/Input";

export const authComponents = {
  login: {
    title: "login",
    node: (
      <>
        <form action="" className="grid gap-4 w-full">
          <Input type="email" />
          <Input type="password" />
          <button
            type="submit"
            className="font-handwriting w-full bg-supernova py-5 rounded-full border-none text-3xl font-bold"
          >
            SUBMIT
          </button>
        </form>
        <a
          href=""
          className="text-2xl font-sans underline font-medium  dark:text-white mb-8"
        >
          Need an account?
        </a>
      </>
    ),
  },
};
