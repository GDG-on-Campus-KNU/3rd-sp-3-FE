import React from "react";
import useStore from "@/features/channel/model/store";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { ChatBubbleIcon } from "@/shared/assets/icons/StyledIcon";
import { enterChatRoom } from "@/features/chatroom/utils/stompClient";
import { JoinButton } from "@/shared/styles/JoinButton";

export const ChatroomList: React.FC = () => {
  const { currentChannel } = useStore((state) => ({
    currentChannel: state.currentChannel,
  }));
  const userNickname = "준혁"; // 사용자 닉네임 설정

  const handleRoomClick = () => {
    console.log(
      `Attempting to enter room in channel ${currentChannel?.id} as ${userNickname}`
    );
    if (currentChannel) {
      enterChatRoom(currentChannel.id, userNickname);
    }
  };

  const renderJoinButton = () => (
    <JoinButton onClick={() => handleRoomClick()}>참여</JoinButton>
  );

  return (
    <ItemList
      label="채팅방"
      items={
        currentChannel?.chatRooms.map((room) => ({
          id: room.id,
          name: room.name,
        })) || []
      }
      renderIconBefore={() => <ChatBubbleIcon />}
      renderIconAfter={() => renderJoinButton()}
    />
  );
};
