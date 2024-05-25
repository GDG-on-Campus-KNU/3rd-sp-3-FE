import React, { useEffect, useRef } from "react";
import {
  StyledMessageList,
  StyledMessage,
  MessageContent,
  UserInfo,
  Avatar,
  StatusIndicator,
  MessageTime,
} from "./styles";
import { MessageListProps } from "@/features/chatroom/model/types";

const formatTimestamp = (timestamp: Date) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

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
              <MessageTime>{formatTimestamp(message.timestamp)}</MessageTime>
            </UserInfo>
          ) : null}
          <MessageContent>{message.text}</MessageContent>
        </StyledMessage>
      ))}
    </StyledMessageList>
  );
};

export default MessageList;
