import useStore from "@/features/channel/model/store";
import { Label } from "@/shared/styles/Label";
import { AddButton } from "@/shared/styles/AddButton";
import {
  MemberListContainer,
  MemberListItem,
  Avatar,
  StatusIndicator,
  MemberName,
  HeaderContainer,
  MicrophoneIcon,
} from "./styles";
import MicOnIcon from "@/assets/mic.png";
import MicOffIcon from "@/assets/mute.png";

export const MemberList: React.FC = () => {
  const { currentChannel } = useStore((state) => ({
    currentChannel: state.currentChannel,
  }));

  return (
    <MemberListContainer>
      <HeaderContainer>
        <Label>멤버</Label>
        <AddButton>+</AddButton>
      </HeaderContainer>
      {currentChannel?.members.map((member) => (
        <MemberListItem key={member.name}>
          <Avatar>
            <StatusIndicator />
          </Avatar>
          <MemberName>{member.name}</MemberName>
          <MicrophoneIcon
            src={member.microphoneStatus === "on" ? MicOnIcon : MicOffIcon}
            alt={
              member.microphoneStatus === "on"
                ? "Microphone On"
                : "Microphone Off"
            }
          />
        </MemberListItem>
      ))}
    </MemberListContainer>
  );
};
