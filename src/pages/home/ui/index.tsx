import { HomePageLayout, Channel, Menu, CollabSpace, ChatRoom } from "./styles";

export const HomePage = () => {
  return (
    <>
      <HomePageLayout>
        <Channel>Channel Section</Channel>
        <Menu>Menu Section</Menu>
        <CollabSpace>CollabSpace Section</CollabSpace>
        <ChatRoom>ChatRoom Section</ChatRoom>
      </HomePageLayout>
    </>
  );
};
