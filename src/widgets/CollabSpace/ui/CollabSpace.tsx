"use client";

import { RoomProvider } from "liveblocks.config";
import { Editor } from "./Editor";
import { ClientSideSuspense } from "@liveblocks/react";

export const CollabSpace: React.FC = () => {
  return (
    <>
      <RoomProvider id="my-room" initialPresence={{}}>
        <ClientSideSuspense fallback="Loading…">
          {() => <Editor />}
        </ClientSideSuspense>
      </RoomProvider>
    </>
  );
};
