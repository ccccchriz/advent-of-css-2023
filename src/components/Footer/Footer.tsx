export default function Footer() {
  return (
    <>
      <footer className="min-h-[20rem] w-full grid place-items-center text-scotchMist dark:text-turquoiseGreen bg-acadia dark:bg-blackPearl pt-8 pb-4 gap-2 bottom-0 fixed -z-20">
        <div className="grid place-items-center gap-2">
          <img
            src="/website/logo__secret-santa--small.svg"
            alt=""
            className="w-full max-w-[15rem] mb-8 filter-turquoiseGreen"
          />
          <p>Copyright ©2023. Ah Ha Creative, LLC. All Rights Reserved.</p>
          <p>Terms & Conditions . Privacy Policy . Disclaimers</p>
        </div>
      </footer>
      <div className="min-h-[20rem]"></div>
    </>
  );
}
