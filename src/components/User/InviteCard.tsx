import Avatar from "../Avatar/Avatar";
import { Icon } from "../Icon/Icon";

type InviteCardProps = {
  avatar?: string;
  letter?: string;
  name: string;
  mail: string;
  status: "online" | "idle" | "do-not-disturb";
};

export default function InviteCard({
  avatar,
  letter,
  status,
  name,
  mail,
}: InviteCardProps) {
  return (
    <div className="flex items-center w-full">
      {avatar ? (
        <Avatar image={avatar} status={status} />
      ) : (
        <Avatar letter={letter ? letter : "A"} status={status} />
      )}
      <div className="flex -ml-20 pl-24 py-4 self pr-2 justify-between w-full bg-white">
        <p className="flex flex-col ">
          <span className="text-4xl font-sans font-bold">{name}</span>
          <span className="font-sans">{mail}</span>
        </p>
        <Icon type="close" style="self-start" />
      </div>
    </div>
  );
}
