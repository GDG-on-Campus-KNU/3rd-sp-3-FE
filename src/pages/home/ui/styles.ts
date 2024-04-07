import styled from "styled-components";

export const Section = styled.section`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  background: #f0f0f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const HomePageLayout = styled.div`
  display: grid;
  grid-template-areas:
    "channel menu menu menu"
    "channel collabSpace collabSpace chatRoom";
  grid-template-columns: 240px auto;
  grid-template-rows: auto 1fr;
  gap: 8px;
  height: 100vh;
  padding: 8px;
  box-sizing: border-box;
`;

export const Channel = styled(Section)`
  grid-area: channel;
`;

export const Menu = styled(Section)`
  grid-area: menu;
`;

export const CollabSpace = styled(Section)`
  grid-area: collabSpace;
`;

export const ChatRoom = styled(Section)`
  grid-area: chatRoom;
`;
