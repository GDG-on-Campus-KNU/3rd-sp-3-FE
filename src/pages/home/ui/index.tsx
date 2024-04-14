import * as Styles from "./styles";
import { ChannelWidget } from "@/widgets/ChannelWidget";
import { CollabSpace } from "@/widgets/CollabSpace";

export const HomePage: React.FC = () => {
  return (
    <>
      <Styles.HomePageLayout>
        <Styles.Channel>
          <ChannelWidget />
        </Styles.Channel>
        <Styles.Menu>Menu Section</Styles.Menu>
        <Styles.CollabSpace>
          <CollabSpace />
        </Styles.CollabSpace>
        <Styles.ChatRoom>ChatRoom Section</Styles.ChatRoom>
      </Styles.HomePageLayout>
    </>
  );
};
