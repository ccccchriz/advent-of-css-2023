import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import MainLayout from "../MainLayout";
import { Icon } from "../../components/Icon/Icon";

interface WishlistArray {
  text: string;
  url: string;
}

function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistArray[]>([
    { text: "fff", url: "ff" },
  ]);

  const updateWishlist = (id: number, field: "text" | "url", value: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.map((el, index) =>
        id != index ? el : { ...el, [field]: value }
      )
    );
  };

  useEffect(() => {
    console.log(wishlist);
  }, [wishlist]);

  return (
    <>
      <MainLayout>
        <div className="mx-2 mt-4 md:mr-16 text-center md:text-left mb-16">
          <h2 className="text-white text-8xl font-condensed">WISH LIST</h2>
          <p className="text-white text-2xl font-handwriting mb-4">
            MAKE YOUR LIST AND CHECK IT TWICE
          </p>
          <form className="grid gap-2">
            {wishlist.map((el, index) => (
              <div className="grid md:grid-cols-[1fr_auto] gap-4" key={index}>
                <Input
                  type="text"
                  id={index}
                  title="none"
                  inFront={`${index + 1}`}
                  value={el.text}
                  onChange={updateWishlist}
                />
                <div className="flex">
                  <div className="bg-spanishGreen h-8 aspect-square [clip-path:polygon(0_0,15%_0,15%_85%,100%_85%,100%_100%,0_100%)] ml-8 mr-4 hidden md:block"></div>
                  <Input
                    type="url"
                    id={index}
                    title="none"
                    inFront="URL"
                    size="small"
                    value={el.url}
                    onChange={updateWishlist}
                  />
                </div>
                {index + 1 == wishlist.length ? (
                  <button
                    type="button"
                    className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:aspect-square rounded-full bg-spanishGreen border-white border-2 p-4 self-center"
                    onClick={() =>
                      setWishlist((v) => [...v, { text: "", url: "" }])
                    }
                  >
                    <span className="sr-only">add field</span>
                    <Icon type="plus" style="fill-white" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:aspect-square rounded-full bg-orangeRed border-white border-2 p-4 self-center"
                    onClick={() =>
                      setWishlist((v) => v.filter((_, i) => i != index))
                    }
                  >
                    <span className="sr-only">remove item</span>
                    <Icon type="close" style="fill-white" />
                  </button>
                )}
              </div>
            ))}
          </form>
        </div>
      </MainLayout>
    </>
  );
}

export default Wishlist;
