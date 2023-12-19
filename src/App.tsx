import InviteCard from "./components/User/InviteCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 w-full">
        <InviteCard
          letter="S"
          status="online"
          name="Stever Rogers"
          mail="captainamerica24@avengers.com"
        />
      </div>
    </>
  );
}

export default App;
