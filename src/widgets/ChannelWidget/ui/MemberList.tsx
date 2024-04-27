import useStore from "@/features/channel/model/store";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { Item, Member } from "@/features/channel/model/types";
import { MicOnIcon, MicOffIcon } from "@/shared/assets/icons/StyledIcon";
import styled from "styled-components";

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ccc;
  margin-right: 10px;
  position: relative;
`;

export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: green;
  position: absolute;
  right: -2px;
  bottom: -2px;
  border: 2px solid #fff;
`;

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
