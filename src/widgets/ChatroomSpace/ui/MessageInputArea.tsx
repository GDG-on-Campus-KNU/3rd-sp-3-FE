import React, { useRef, KeyboardEvent } from "react";
import {
  MessageInputContainer,
  MessageInput,
  SendMessageButton,
} from "./styles";
import { MdSend } from "react-icons/md";
import { MessageInputAreaProps } from "@/features/chatroom/model/types";

const MessageInputArea: React.FC<MessageInputAreaProps> = ({
  message,
  setMessage,
  sendMessage,
  handleInput,
}) => {
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(event as unknown as React.SyntheticEvent);
    }
  };

  return (
    <MessageInputContainer onSubmit={sendMessage}>
      <MessageInput
        ref={messageInputRef}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          if (messageInputRef.current) {
            handleInput(messageInputRef.current);
          }
        }}
        onKeyDown={handleKeyDown}
        placeholder="메시지 입력..."
      />
      <SendMessageButton type="submit">
        <MdSend size={20} />
      </SendMessageButton>
    </MessageInputContainer>
  );
};

export default MessageInputArea;
