import { useState } from "react";
import WishlistDetails from "./components/Wishlist/WishlistDetails";

function App() {
  const [isWishlistExpanded, setIsWishlistExpanded] = useState<boolean>(false);

  const handleOpenPanel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsWishlistExpanded(true);
  };

  const testData = {
    name: "Bessie Cooper",
    email: "bessie.cooper@example.com",
    status: "idle",
    avatar: "avatar/img/avatar-06.png",
    wishlist: [
      {
        text: "iPhone 15",
        url: "https://www.apple.com/shop/buy-iphone/iphone-15/6.1-inch-display-128gb-green-unlocked",
      },
      {
        text: "Airpods Pods",
        url: "https://www.apple.com/shop/product/MTJV3AM/A/airpods-pro",
      },
    ],
  };

  return (
    <>
      <button type="button" onClick={(event) => handleOpenPanel(event)}>
        expand
      </button>
      <WishlistDetails
        data={testData}
        setIsExpanded={setIsWishlistExpanded}
        isExpanded={isWishlistExpanded}
      />
    </>
  );
}

export default App;
