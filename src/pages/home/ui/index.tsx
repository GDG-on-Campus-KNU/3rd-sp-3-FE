import React from "react";
import * as Styles from "./styles";
import { ChannelWidget } from "@/widgets/ChannelSpace/ChannelWidget";
import { CollabSpace } from "@/widgets/CollabSpace";
import { ChatroomSpace } from "@/widgets/ChatroomSpace";
import { UserProfile } from "@/widgets/MenuSpace/UserProfile/UserProfile";

export const HomePage: React.FC = () => {
  return (
    <>
      <Styles.HomePageLayout>
        <Styles.Channel>
          <ChannelWidget />
        </Styles.Channel>
        <Styles.Menu>
          <UserProfile />
        </Styles.Menu>
        <Styles.CollabSpace>
          <CollabSpace />
        </Styles.CollabSpace>
        <Styles.ChatRoom>
          <ChatroomSpace />
        </Styles.ChatRoom>
      </Styles.HomePageLayout>
    </>
  );
};
