import useStore from "@/features/channel/model/store";
import MicOnIcon from "@/assets/mic.png";
import MicOffIcon from "@/assets/mute.png";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { Avatar, StatusIndicator, MicrophoneIcon } from "./styles";
import { Item, Member } from "@/features/channel/model/types";

export const MemberList: React.FC = () => {
  const { currentChannel } = useStore((state) => ({
    currentChannel: state.currentChannel,
  }));

  const renderStatusIndicator = () => (
    <Avatar>
      <StatusIndicator />
    </Avatar>
  );

  const renderMicrophoneIcon = (member: Member) => (
    <MicrophoneIcon
      src={member.microphoneStatus === "on" ? MicOnIcon : MicOffIcon}
      alt={
        member.microphoneStatus === "on" ? "Microphone On" : "Microphone Off"
      }
    />
  );

  return (
    <ItemList
      label="멤버"
      items={currentChannel?.members || []}
      renderIconBefore={renderStatusIndicator}
      renderIconAfter={(item: Item) => renderMicrophoneIcon(item as Member)}
    />
  );
};
