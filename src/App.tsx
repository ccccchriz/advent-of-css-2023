import { useState } from "react";
import WishlistDetails from "./components/Wishlist/WishlistDetails";
import Avatar from "./components/Avatar/Avatar";

function App() {
  const [isWishlistExpanded, setIsWishlistExpanded] = useState<boolean>(false);

  const handleOpenPanel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsWishlistExpanded(true);
  };

  return (
    <>
      <button type="button" onClick={(e) => handleOpenPanel(e)}>
        expand
      </button>
      <WishlistDetails
        avatar={<Avatar image="avatar/img/avatar-01.png" />}
        setIsExpanded={setIsWishlistExpanded}
        isExpanded={isWishlistExpanded}
      />
    </>
  );
}

export default App;
