import Avatar from "../Avatar/Avatar";
import { Icon } from "../Icon/Icon";
import SlideInPanel from "../SlideInPanel/SlideInPanel";

type WishlistDetailsProps = {
  isExpanded: Boolean;
  setIsExpanded: Function;
  data: User;
};

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
  avatar: string;
  wishlist: {
    text: string;
    url: string;
  }[];
}

export default function WishlistDetails({
  isExpanded,
  setIsExpanded,
  data,
}: WishlistDetailsProps) {
  return (
    <>
      <SlideInPanel isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
        <div className="flex items-center justify-between mx-8">
          <h2 className="uppercase text-white text-8xl font-condensed">
            wish list
          </h2>
          <button
            type="button"
            className="flex items-center bg-supernova gap-2 py-1 px-6 rounded-full font-bold font-sans text-sm"
          >
            <Icon type="edit" />
            EDIT
          </button>
        </div>
        <div className="flex items-center mx-8 gap-4">
          <p className="font-handwriting uppercase text-white text-2xl">for</p>
          <div className="flex flex-grow items-center">
            {data.avatar ? (
              <Avatar image={data.avatar} />
            ) : (
              <Avatar letter={data.name[0]} />
            )}
            <div className="bg-white w-full py-4 pl-16 -ml-12 -z-10">
              <p className="font-sans text-3xl font-bold">{data.name}</p>
              <p className="font-sans">{data.email}</p>
            </div>
          </div>
        </div>
        <ul className="font-handwriting text-white text-3xl mx-8 mt-6 flex flex-col gap-2">
          {data &&
            data.wishlist.map((el, index) => (
              <li
                key={el.text}
                className="border-b-slate-300 border-b-2 py-4 grid grid-cols-[1fr_auto] w-full"
              >
                <p className="flex gap-4 items-center">
                  <span aria-hidden={true}>{index + 1}</span>
                  <span className="font-sans font-bold text-3xl [overflow-wrap:anywhere;]">
                    {el.text}
                  </span>
                </p>
                <a
                  href={el.url}
                  target="_blank"
                  className="px-8 py-2 uppercase font-sans text-base font-bold bg-countyGreen hover:bg-turquoiseGreen grid place-items-center rounded-full self-center"
                >
                  details
                </a>
              </li>
            ))}
        </ul>
      </SlideInPanel>
    </>
  );
}
