import React, { useEffect, useRef } from "react";
import {
  StyledMessageList,
  StyledMessage,
  MessageContent,
  UserInfo,
  Avatar,
  StatusIndicator,
} from "./styles";
import { MessageListProps } from "@/features/chatroom/model/types";

const MessageList: React.FC<MessageListProps> = ({ messages, currentUser }) => {
  const messageListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <StyledMessageList ref={messageListRef}>
      {messages.map((message) => (
        <StyledMessage
          key={message.id}
          isCurrentUser={currentUser?.id === message.userId}
        >
          {!currentUser || currentUser.id !== message.userId ? (
            <UserInfo>
              <Avatar>
                <StatusIndicator />
              </Avatar>
              <strong>{message.sender}</strong>
            </UserInfo>
          ) : null}
          <MessageContent>{message.text}</MessageContent>
        </StyledMessage>
      ))}
    </StyledMessageList>
  );
};

export default MessageList;
