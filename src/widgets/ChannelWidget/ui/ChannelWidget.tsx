import { ChannelPicker } from "@/widgets/ChannelPicker/index.ts";
import { MemberList } from "@/widgets/MemberList/index.ts";
import { DocumentList } from "@/widgets/DocumentList/index.ts";
import { ChatroomList } from "@/widgets/ChatroomList/index.ts";
import { VoiceroomList } from "@/widgets/VoiceroomList/index.ts";
import {
  ChannelContainer,
  ChannelPickerContainer,
  MainContentContainer,
} from "./ChannelStyles";

export const ChannelWidget: React.FC = () => {
  return (
    <ChannelContainer>
      <ChannelPickerContainer>
        <ChannelPicker />
      </ChannelPickerContainer>
      <MainContentContainer>
        <MemberList />
        <DocumentList />
        <ChatroomList />
        <VoiceroomList />
      </MainContentContainer>
    </ChannelContainer>
  );
};
