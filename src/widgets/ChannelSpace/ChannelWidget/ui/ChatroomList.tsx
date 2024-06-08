import React from "react";
import useStore from "@/features/channel/model/store";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { ChatBubbleIcon } from "@/shared/assets/icons/StyledIcon";
import { JoinButton } from "@/shared/styles/JoinButton";
import {
  enterChatRoom,
  subscribeToChatRoom,
} from "@/features/chatroom/utils/stompClient";

export const ChatroomList: React.FC = () => {
  const { currentChannel, currentConnectionState } = useStore((state) => ({
    currentChannel: state.currentChannel,
    currentConnectionState: state.currentConnectionState,
  }));
  const userNickname = "준혁";

  const handleRoomClick = (roomId: string) => {
    console.log(
      `Attempting to ${
        currentConnectionState === "ENTER" ? "exit" : "enter"
      } room ${roomId} in channel ${currentChannel?.id} as ${userNickname}`
    );
    if (currentChannel) {
      enterChatRoom(currentChannel.id, userNickname);
      if (currentConnectionState === "EXIT") {
        subscribeToChatRoom(roomId);
      }
    }
  };

  const renderJoinButton = (roomId: string) => (
    <JoinButton onClick={() => handleRoomClick(roomId)}>
      {currentConnectionState === "ENTER" ? "퇴장" : "참여"}
    </JoinButton>
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
      renderIconAfter={(item) => renderJoinButton(item.id)}
    />
  );
};
