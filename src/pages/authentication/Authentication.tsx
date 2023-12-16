import { authComponents } from "./authComponents.tsx";

type authProps = {
  type: keyof typeof authComponents;
};

export default function Authentication({ type }: authProps) {
  return (
    <main className="w-full min-h-screen lg:bg-[url('/website/bg__auth.svg')] bg-cover bg-no-repeat grid place-items-center bg-silverTree dark:bg-nileBlue">
      <section className="grid place-items-center gap-4 w-full max-w-xl px-4">
        <h1 className="sr-only">Secret Santa</h1>
        <img src="/website/logo__secret-santa.svg" alt="" />
        <h2 className="flex items-center gap-3 text-white text-6xl font-condensed uppercase before:block before:h-1 before:w-12 before:bg-white after:block after:h-1 after:w-12 after:bg-white">
          {authComponents[type].title}
        </h2>
        {authComponents[type].node}
      </section>
    </main>
  );
}
