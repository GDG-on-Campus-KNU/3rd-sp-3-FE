import useStore from "@/features/channel/model/store";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { Avatar, StatusIndicator } from "./styles";
import { Item, Member } from "@/features/channel/model/types";
import { MicOnIcon, MicOffIcon } from "@/shared/assets/icons/StyledIcon";

export const MemberList: React.FC = () => {
  const { currentChannel } = useStore((state) => ({
    currentChannel: state.currentChannel,
  }));

  const renderStatusIndicator = () => (
    <Avatar>
      <StatusIndicator />
    </Avatar>
  );

  const renderMicrophoneIcon = (member: Member) =>
    member.microphoneStatus === "on" ? <MicOnIcon /> : <MicOffIcon />;

  return (
    <ItemList
      label="멤버"
      items={currentChannel?.members || []}
      renderIconBefore={renderStatusIndicator}
      renderIconAfter={(item: Item) => renderMicrophoneIcon(item as Member)}
    />
  );
};
