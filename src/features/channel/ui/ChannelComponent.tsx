import React from "react";
import {
  ChannelContainer,
  Heading,
  Subheading,
  List,
  ListItem,
} from "./ChannelStyles";
import useStore from "../model/store";

const ChannelComponent: React.FC = () => {
  const { currentChannel } = useStore((state) => state);

  return (
    <ChannelContainer>
      <Heading>{currentChannel?.name}</Heading>
      <div>
        <Subheading>Members</Subheading>
        <List>
          {currentChannel?.members.map((member) => (
            <ListItem key={member}>{member}</ListItem>
          ))}
        </List>
      </div>
      <div>
        <Subheading>Documents</Subheading>
        <List>
          {currentChannel?.documents.map((document) => (
            <ListItem key={document}>{document}</ListItem>
          ))}
        </List>
      </div>
      <div>
        <Subheading>Chat Rooms</Subheading>
        {currentChannel?.chatRooms.map((room) => (
          <div key={room.id}>{room.name}</div>
        ))}
      </div>
      <div>
        <Subheading>Voice Chat Room</Subheading>
        {/* Additional UI for voice chat room */}
      </div>
    </ChannelContainer>
  );
};

export default ChannelComponent;
