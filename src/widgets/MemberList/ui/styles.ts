import styled from "styled-components";

export const MicrophoneIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: auto;
  opacity: 0.6;
  filter: grayscale(100%);
`;

export const MemberListContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #b4b4b4;
`;

export const MemberListItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ccc;
  margin-right: 10px;
  position: relative;
`;

export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: green;
  position: absolute;
  right: -2px;
  bottom: -2px;
  border: 2px solid #fff;
`;

export const MemberName = styled.span`
  font-size: 14px;
  color: #333;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
