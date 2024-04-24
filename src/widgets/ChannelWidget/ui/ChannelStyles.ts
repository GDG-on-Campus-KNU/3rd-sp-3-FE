import styled from "styled-components";

export const ChannelContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ChannelPickerContainer = styled.div`
  grid-column: 1;
  width: 40px;
  background: #e3e5e8;
  border-radius: 8px 0 0 8px;
  padding: 15px;
`;

export const MainContentContainer = styled.div`
  grid-column: 2;
  width: 240px;
  display: flex;
  flex-direction: column;
  background: #f2f3f5;
  border-radius: 0 8px 8px 0;
  padding: 10px;
`;

export const Heading = styled.h1`
  color: #333;
  font-size: 24px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

export const ChannelLabel = styled.h3`
  margin: 0;
  color: #888;
  font-size: 14px;
  font-weight: normal;
  text-transform: uppercase;
`;

export const MemberCount = styled.p`
  margin: 5px 0 0 0;
  color: #888;
  font-size: 14px;
`;

export const ChannelInfoContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #eee;
  text-align: left;
`;

export const ChannelName = styled.h2`
  margin: 0 0 10px 0;
  color: #333;
  font-size: 24px;
`;
