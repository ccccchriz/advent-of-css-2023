import InviteCard from "./components/User/InviteCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-2">
        <InviteCard
          letter="S"
          status="online"
          name="Stever Rogers"
          mail="captainamerica24@avengers.com"
        />

        <InviteCard
          letter="T"
          status="do-not-disturb"
          name="Tony Stark"
          mail="ironmanthefirst@avengers.com"
        />

        <InviteCard
          letter="T"
          status="idle"
          name="Miles Morales"
          mail="spidey@avengers.com"
        />
        <InviteCard
          letter="S"
          status="online"
          name="Stever Rogers"
          mail="captainamerica24@avengers.com"
        />

        <InviteCard
          letter="T"
          status="do-not-disturb"
          name="Tony Stark"
          mail="ironmanthefirst@avengers.com"
        />

        <InviteCard
          letter="T"
          status="idle"
          name="Miles Morales"
          mail="spidey@avengers.com"
        />
      </div>
    </>
  );
}

export default App;
