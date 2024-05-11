import styled from "styled-components";

export const ChatroomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 82vh;
  overflow: hidden;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const ChatroomName = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px 16px;
  display: flex;
  align-items: center;
`;

export const HideButton = styled.button`
  margin-right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 24px;
`;

export const StyledMessageList = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  margin-top: 10px;
  padding: 0 16px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #87b4ac;
    border-radius: 10px;
    &:hover {
      background: #5e8c83;
    }
  }
`;

export const StyledMessage = styled.div<{ isCurrentUser: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isCurrentUser }) =>
    isCurrentUser ? "flex-end" : "flex-start"};
  margin-bottom: 30px;
`;

export const MessageContent = styled.div`
  padding: 12px;
  background-color: white;
  border-radius: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  width: fit-content;
  max-width: 80%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: grey;
  position: relative;
  margin-right: 10px;
`;

export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  border: 2px solid white;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const MessageInputContainer = styled.form`
  display: flex;
  padding: 10px 16px;
  align-items: flex-end;
`;

export const MessageInput = styled.textarea`
  flex-grow: 1;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 10px;
  resize: none;
  line-height: 1.5;
  max-height: 200px;
  padding: 10px 10px 0 10px;
  overflow: auto;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-style: italic;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const SendMessageButton = styled.button`
  width: 54px;
  height: 54px;
  padding: 10px;
  background-color: #87b4ac;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #5e8c83;
  }
`;
