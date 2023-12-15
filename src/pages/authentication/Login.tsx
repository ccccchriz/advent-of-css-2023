import Input from "../../components/Input/Input";

export default function Login() {
  return (
    <main className="w-full min-h-screen bg-[url('/website/bg__auth.svg')] bg-cover bg-no-repeat grid place-items-center bg-silverTree">
      <section className="grid place-items-center gap-4 w-full max-w-xl px-4">
        <h1 className="sr-only">Secret Santa</h1>
        <img src="/website/logo__secret-santa.svg" alt="" />
        <h2 className="flex items-center gap-3 text-white text-6xl font-condensed uppercase before:block before:h-1 before:w-12 before:bg-white after:block after:h-1 after:w-12 after:bg-white">
          login
        </h2>
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
        <a href="" className="text-2xl font-sans underline font-medium">
          Need an account?
        </a>
      </section>
    </main>
  );
}
