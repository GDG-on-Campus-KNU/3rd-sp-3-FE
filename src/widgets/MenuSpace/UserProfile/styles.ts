import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 20px;
  gap: 10px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Email = styled.span`
  font-size: 16px;
  color: #333;
`;

export const StatusText = styled.span`
  font-size: 14px;
  color: #666;
`;

export const IconContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const MicrophoneButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;
