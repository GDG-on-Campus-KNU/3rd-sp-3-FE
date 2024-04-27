import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ChannelState, Channel } from "./types";

const dummyChannels: Channel[] = [
  {
    id: "1",
    name: "프로젝트 채널 1",
    description: "프로젝트 채널 1에 대한 소개입니다.",
    members: [
      { name: "사용자1", microphoneStatus: "on" },
      { name: "사용자2", microphoneStatus: "on" },
      { name: "사용자3", microphoneStatus: "off" },
    ],
  },
  {
    id: "2",
    name: "프로젝트 채널 2",
    description: "프로젝트 채널 2에 대한 소개입니다.",
    members: [
      { name: "사용자1", microphoneStatus: "on" },
      { name: "사용자2", microphoneStatus: "on" },
    ],
  },
  {
    id: "3",
    name: "프로젝트 채널 3",
    description: "프로젝트 채널 3에 대한 소개입니다.",
    members: [
      { name: "사용자1", microphoneStatus: "on" },
      { name: "사용자2", microphoneStatus: "on" },
      { name: "사용자3", microphoneStatus: "on" },
    ],
  },
  {
    id: "4",
    name: "프로젝트 채널 4",
    description: "프로젝트 채널 4에 대한 소개입니다.",
    members: [{ name: "사용자1", microphoneStatus: "off" }],
  },
  {
    id: "5",
    name: "프로젝트 채널 5",
    description: "프로젝트 채널 5에 대한 소개입니다.",
    members: [
      { name: "사용자1", microphoneStatus: "on" },
      { name: "사용자2", microphoneStatus: "off" },
    ],
  },
  {
    id: "6",
    name: "프로젝트 채널 6",
    description: "프로젝트 채널 6에 대한 소개입니다.",
    members: [
      { name: "사용자1", microphoneStatus: "on" },
      { name: "사용자2", microphoneStatus: "on" },
      { name: "사용자3", microphoneStatus: "off" },
      { name: "사용자4", microphoneStatus: "on" },
    ],
  },
  {
    id: "7",
    name: "프로젝트 채널 7",
    description: "프로젝트 채널 7에 대한 소개입니다.",
    members: [
      { name: "사용자1", microphoneStatus: "on" },
      { name: "사용자2", microphoneStatus: "on" },
      { name: "사용자3", microphoneStatus: "off" },
      { name: "사용자4", microphoneStatus: "on" },
      { name: "사용자5", microphoneStatus: "off" },
    ],
  },
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
