import { ReactNode } from "react";
import { Icon } from "../Icon/Icon";
import SlideInPanel from "../SlideInPanel/SlideInPanel";

type WishlistDetailsProps = {
  isExpanded: Boolean;
  setIsExpanded: Function;
  avatar?: ReactNode;
};

export default function WishlistDetails({
  isExpanded,
  setIsExpanded,
  avatar,
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
          <div className="flex flex-grow">
            {avatar ? avatar : <div className="max-w-[3.75rem] w-full"></div>}
            {/* TODO: dynamic name and email */}
            <div className="bg-white w-full py-4 pl-16 -ml-12 -z-10">
              <p className="font-sans text-3xl font-bold">Jenny Jones</p>
              <p className="font-sans">jenny.jones@example.com</p>
            </div>
          </div>
        </div>
      </SlideInPanel>
    </>
  );
}
