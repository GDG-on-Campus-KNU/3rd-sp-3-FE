import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ChannelState } from "./types";

const dummyChannels = [
  { id: "1", name: "Channel 1" },
  { id: "2", name: "Channel 2" },
  { id: "3", name: "Channel 3" },
  { id: "4", name: "Channel 4" },
  { id: "5", name: "Channel 5" },
  { id: "6", name: "Channel 6" },
  { id: "7", name: "Channel 7" },
];

const useStore = create<ChannelState>(
  devtools<ChannelState>(
    (set) => ({
      currentChannel: null,
      channels: dummyChannels,
      setCurrentChannel: (channel) => set({ currentChannel: channel }),
      setChannels: (channels) => set({ channels }),
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
