import { create } from "zustand";
import { ChannelState } from "./types";
import { dummyChannels } from "../dummyChannel";

const useStore = create<ChannelState>((set) => ({
  currentChannel: null,
  channels: dummyChannels,
  setCurrentChannel: (channel) => set({ currentChannel: channel }),
  setChannels: (channels) => set({ channels }),
  sendMessage: (chatRoomId, message) => {},
}));

export default useStore;
