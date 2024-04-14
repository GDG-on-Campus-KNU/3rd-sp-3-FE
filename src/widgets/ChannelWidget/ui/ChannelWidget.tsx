import { ChannelPicker } from "@/widgets/ChannelPicker/index.ts";
import { MemberList } from "@/widgets/MemberList/index.ts";
import { DocumentList } from "@/widgets/DocumentList/index.ts";
import { ChatroomList } from "@/widgets/ChatroomList/index.ts";
import { VoiceroomList } from "@/widgets/VoiceroomList/index.ts";
import { ChannelContainer } from "./ChannelStyles.ts";

export const ChannelWidget: React.FC = () => {
  return (
    <ChannelContainer>
      <ChannelPicker />
      <MemberList />
      <DocumentList />
      <ChatroomList />
      <VoiceroomList />
    </ChannelContainer>
  );
};
