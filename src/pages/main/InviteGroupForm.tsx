import EmailInput from "../../components/Input/EmailInput";
import Input from "../../components/Input/Input";
import InviteCard from "../../components/User/InviteCard";

export default function InviteGroupForm() {
  return (
    <>
      <div className="">
        <h2 className="text-white font-handwriting uppercase mb-2 text-lg">
          invite a friend or family member
        </h2>
        <form className="flex flex-col lg:flex-row gap-4 w-full bg-spanishGreen p-4">
          <div className="grow">
            <Input type="text" />
          </div>
          <div className="grow">
            <EmailInput />
          </div>
          <button
            type="submit"
            className="w-16 p-4 h-min rounded-full aspect-square bg-supernova self-center border-2 border-white"
          >
            <span className="sr-only"></span>
            <span aria-hidden="true" className="">
              +
            </span>
          </button>
        </form>
        <div className="grid lg:grid-cols-2 gap-12 py-12 px-4">
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
      </div>
    </>
  );
}
