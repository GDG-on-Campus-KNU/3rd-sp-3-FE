import * as Styles from "./styles";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

export const HomePage: React.FC = () => {
  const editor = useCreateBlockNote();

  return (
    <>
      <Styles.HomePageLayout>
        <Styles.Channel>Channel Section</Styles.Channel>
        <Styles.Menu>Menu Section</Styles.Menu>
        <Styles.CollabSpace>
          <Styles.BlockNoteWrapper>
            <Styles.BlockNoteStyles />
            <BlockNoteView editor={editor} />
          </Styles.BlockNoteWrapper>
        </Styles.CollabSpace>
        <Styles.ChatRoom>ChatRoom Section</Styles.ChatRoom>
      </Styles.HomePageLayout>
    </>
  );
};
