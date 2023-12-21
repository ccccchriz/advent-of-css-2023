import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu.tsx";
import UserInfo from "../components/User/UserWithDropdown.tsx";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <main className="min-h-screen grid md:grid-cols-[20rem_auto] bg-silverTree dark:bg-nileBlue gap-4">
        <Menu />
        <div className="hidden md:block">
          <img
            src="website/bg__interior.svg"
            alt=""
            className="absolute max-w-[22rem]"
          />
          <img
            src="website/logo__secret-santa.svg"
            alt=""
            className="absolute max-w-[12rem] top-[108px] left-[16px]"
          ></img>
        </div>
        <div className="">
          <div className="flex w-full justify-end mt-16 -ml-4 md:mt-4 md:-ml-6">
            <UserInfo avatar="avatar/img/avatar-01.png" name="Cody Fisher" />
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
