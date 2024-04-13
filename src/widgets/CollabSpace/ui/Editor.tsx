/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import * as Y from "yjs";
import LiveblocksProvider from "@liveblocks/yjs";
import { useRoom } from "liveblocks.config";
import * as Styles from "./styles";

type EditorProps = {
  doc: Y.Doc;
  provider: any;
};

export const Editor = () => {
  const room = useRoom();
  const [doc, setDoc] = useState<Y.Doc>();
  const [provider, setProvider] = useState<any>();

  // Set up Liveblocks Yjs provider
  useEffect(() => {
    const yDoc = new Y.Doc();
    const yProvider = new LiveblocksProvider(room, yDoc);
    setDoc(yDoc);
    setProvider(yProvider);

    return () => {
      yDoc?.destroy();
      yProvider?.destroy();
    };
  }, [room]);

  if (!doc || !provider) {
    return null;
  }

  return <BlockNote doc={doc} provider={provider} />;
};

function BlockNote({ doc, provider }: EditorProps) {
  const editor: BlockNoteEditor = useCreateBlockNote({
    collaboration: {
      provider,

      // Where to store BlockNote data in the Y.Doc:
      fragment: doc.getXmlFragment("document-store"),

      // Information for this user:
      user: {
        name: "My Username",
        color: "#ff0000",
      },
    },
  });

  return (
    <>
      <Styles.BlockNoteWrapper>
        <Styles.BlockNoteStyles />
        <BlockNoteView editor={editor} />
      </Styles.BlockNoteWrapper>
    </>
  );
}
