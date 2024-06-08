import React, { useState, useRef, useEffect } from "react";
import { useUserStore } from "@/features/user/model/store";
import { ChatroomContainer, ChatroomName, HideButton } from "./styles";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import MessageList from "./MessageList";
import MessageInputArea from "./MessageInputArea";
import {
  client,
  subscribeToChatRoom,
} from "@/features/chatroom/utils/stompClient";
import { useChatStore } from "@/features/chatroom/model/store";

export const ChatroomSpace: React.FC = () => {
  const { currentUser } = useUserStore();
  const { messages } = useChatStore();
  const [message, setMessage] = useState<string>("");
  const [isChatroomVisible, setIsChatroomVisible] = useState<boolean>(true);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (currentUser?.currentChatRoomId) {
      subscribeToChatRoom(currentUser.currentChatRoomId);
    }
  }, [currentUser]);

  // 3. 채팅 전송
  const sendMessage = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (message.trim()) {
      client.publish({
        destination: `/api/pub/${currentUser?.currentChatRoomId}`,
        body: JSON.stringify({ senderId: currentUser?.id, content: message }),
      });
      setMessage("");
      if (inputRef.current) {
        inputRef.current.style.height = "40px";
      }
    }
  };

  const handleInput = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  return (
    <ChatroomContainer
      style={{ transform: isChatroomVisible ? "none" : "translateX(100%)" }}
    >
      <ChatroomName>
        <HideButton onClick={() => setIsChatroomVisible(!isChatroomVisible)}>
          <MdOutlineKeyboardDoubleArrowRight />
        </HideButton>
        채팅방
      </ChatroomName>

      <MessageList messages={messages} currentUser={currentUser} />

      <MessageInputArea
        inputRef={inputRef}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        handleInput={handleInput}
      />
    </ChatroomContainer>
  );
};
