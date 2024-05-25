import React, { useState } from "react";
import { useUserProfile } from "@/features/user/hooks/useUserProfile";
import { MicOnIcon, MicOffIcon } from "@/shared/assets/icons/StyledIcon";
import {
  ProfileContainer,
  UserInfo,
  Email,
  StatusText,
  IconContainer,
  MicrophoneButton,
} from "./styles";
import { Avatar } from "@/shared/styles/Avatar";
import { StatusIndicator } from "@/shared/styles/StatusIndicator";

export const UserProfile: React.FC = () => {
  const currentUser = useUserProfile();
  const [micOn, setMicOn] = useState(true);

  const toggleMic = () => {
    setMicOn(!micOn);
  };

  return (
    <>
      {currentUser ? (
        <>
          <ProfileContainer>
            <Avatar>
              <StatusIndicator />
            </Avatar>
            <UserInfo>
              <Email>{currentUser.email}</Email>
              <StatusText>온라인</StatusText>
            </UserInfo>
            <IconContainer>
              <MicrophoneButton onClick={toggleMic}>
                {micOn ? <MicOnIcon /> : <MicOffIcon />}
              </MicrophoneButton>
            </IconContainer>
          </ProfileContainer>
        </>
      ) : (
        <p>No User Logged In</p>
      )}
    </>
  );
};
