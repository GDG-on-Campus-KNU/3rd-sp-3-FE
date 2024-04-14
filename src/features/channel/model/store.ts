import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ChannelState } from "./types";

const useStore = create<ChannelState>(
  devtools<ChannelState>(
    (set) => ({
      currentChannel: null,
      setCurrentChannel: (channel) => set({ currentChannel: channel }),
      sendMessage: (chatRoomId, message) =>
        set((state) => {
          const channel = state.currentChannel;
          if (!channel) return;

          const updatedChatRooms = channel.chatRooms.map((room) =>
            room.id === chatRoomId
              ? { ...room, messages: [...room.messages, message] }
              : room
          );

          return {
            currentChannel: { ...channel, chatRooms: updatedChatRooms },
          };
        }),
    }),
    { name: "ChannelStore" }
  )
);

export default useStore;
