import { useState } from "react";
import WishlistDetails from "./components/Wishlist/WishlistDetails";
import { useLoaderData } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Avatar from "./components/Avatar/Avatar";

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

function App() {
  const [isWishlistExpanded, setIsWishlistExpanded] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(0);

  const handleOpenPanel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsWishlistExpanded(true);
  };

  const testData = useLoaderData() as User[];

  return (
    <>
      <MainLayout>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {testData
            .filter((el) => el.status == "online")
            .map((el) => (
              <button
                type="button"
                onClick={(event) => {
                  setUserId(el.id);
                  handleOpenPanel(event);
                }}
                className="bg-white flex items-center text-left"
              >
                {el.avatar ? (
                  <Avatar image={el.avatar} />
                ) : (
                  <Avatar letter={el.name[0]} />
                )}
                <p className="grid">
                  <span>{el.name}</span>
                  <span>{el.email}</span>
                </p>
              </button>
            ))}
        </div>

        <WishlistDetails
          data={testData[userId]}
          setIsExpanded={setIsWishlistExpanded}
          isExpanded={isWishlistExpanded}
        />
      </MainLayout>
    </>
  );
}

export default App;
