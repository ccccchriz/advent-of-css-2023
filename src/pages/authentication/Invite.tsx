import { Link } from "react-router-dom";
import Authentication from "./Authentication";
import { Icon } from "../../components/Icon/Icon";

export default function Invite() {
  return (
    <Authentication title="you're invited to">
      <h3 className="text-8xl text-white uppercase text-center font-condensed">
        smith christmas
      </h3>
      <p className="text-white uppercase text-center text-3xl font-handwriting">
        23 december 2023
      </p>
      <div className="grid lg:grid-cols-2 gap-8 mt-4 mb-24">
        <Link to="decline" className=" grid grid-cols-[auto_1fr] items-center">
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
    </Authentication>
  );
}
