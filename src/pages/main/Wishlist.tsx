import { useState } from "react";
import Input from "../../components/Input/Input";
import MainLayout from "../MainLayout";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  return (
    <>
      <MainLayout>
        <div className="mr-16">
          <h2 className="text-white text-8xl font-condensed">WISH LIST</h2>
          <p className="text-white text-2xl font-handwriting">
            MAKE YOUR LIST AND CHECK IT TWICE
          </p>
          <form>
            <Input type="text" />
            <button>create element</button>
            <Input type="url" />
          </form>
        </div>
      </MainLayout>
    </>
  );
}

export default Wishlist;
