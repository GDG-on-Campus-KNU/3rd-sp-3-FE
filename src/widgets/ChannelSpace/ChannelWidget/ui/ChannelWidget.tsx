import { ChannelPicker } from "@/widgets/ChannelSpace/ChannelPicker";
import { MemberList } from "./MemberList";
import { DocumentList } from "./DocumentList";
import { ChatroomList } from "./ChatroomList";
import { VoiceroomList } from "./VoiceroomList";
import { ChannelInfo } from "@/widgets/ChannelSpace/ChannelInfo";
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
        {currentChannel && (
          <>
            <ChannelInfo />
            <MemberList />
            <DocumentList />
            <ChatroomList />
            <VoiceroomList />
          </>
        )}
      </MainContentContainer>
    </ChannelContainer>
  );
};
