import useStore from "@/features/channel/model/store";
import { ChannelInfoContainer, ChannelName, MemberCount } from "./styles";
import { Label } from "@/shared/styles/Label";

export const ChannelInfo: React.FC = () => {
  const { currentChannel } = useStore((state) => ({
    currentChannel: state.currentChannel,
    membersCount: state.currentChannel?.members.length || 0,
  }));

  if (!currentChannel) return null;

  return (
    <ChannelInfoContainer>
      <Label>채널</Label>
      <ChannelName>{currentChannel.name}</ChannelName>
      <MemberCount>{currentChannel.members.length}명의 멤버</MemberCount>
    </ChannelInfoContainer>
  );
};
