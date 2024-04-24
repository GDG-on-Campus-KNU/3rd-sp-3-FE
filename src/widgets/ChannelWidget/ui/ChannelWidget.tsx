import { ChannelPicker } from "@/widgets/ChannelPicker";
import { MemberList } from "@/widgets/MemberList/index.ts";
import { DocumentList } from "@/widgets/DocumentList/index.ts";
import { ChatroomList } from "@/widgets/ChatroomList/index.ts";
import { VoiceroomList } from "@/widgets/VoiceroomList/index.ts";
import { ChannelInfo } from "@/widgets/ChannelInfo";
import {
  ChannelContainer,
  ChannelPickerContainer,
  MainContentContainer,
} from "./ChannelStyles";
import useStore from "@/features/channel/model/store";

export const ChannelWidget: React.FC = () => {
  const { currentChannel } = useStore((state) => ({
    currentChannel: state.currentChannel,
  }));

  return (
    <ChannelContainer>
      <ChannelPickerContainer>
        <ChannelPicker />
      </ChannelPickerContainer>
      <MainContentContainer>
        {currentChannel && <ChannelInfo />}
        <MemberList />
        <DocumentList />
        <ChatroomList />
        <VoiceroomList />
      </MainContentContainer>
    </ChannelContainer>
  );
};
