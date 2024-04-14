import * as Styles from "./styles";
import { CollabSpace } from "@/widgets/CollabSpace";

export const HomePage: React.FC = () => {
  return (
    <>
      <Styles.HomePageLayout>
        <Styles.Channel>Channel Section</Styles.Channel>
        <Styles.Menu>Menu Section</Styles.Menu>
        <Styles.CollabSpace>
          <CollabSpace />
        </Styles.CollabSpace>
        <Styles.ChatRoom>ChatRoom Section</Styles.ChatRoom>
      </Styles.HomePageLayout>
    </>
  );
};
