import useStore from "@/features/channel/model/store";
import {
  ChannelInfoContainer,
  ChannelLabel,
  ChannelName,
  MemberCount,
} from "./styles";

export const ChannelInfo: React.FC = () => {
  const { currentChannel } = useStore((state) => ({
    currentChannel: state.currentChannel,
    membersCount: state.currentChannel?.members.length || 0,
  }));

  if (!currentChannel) return null;

  return (
    <ChannelInfoContainer>
      <ChannelLabel>채널</ChannelLabel>
      <ChannelName>{currentChannel.name}</ChannelName>
      <MemberCount>{currentChannel.members.length}명의 멤버</MemberCount>
    </ChannelInfoContainer>
  );
};
