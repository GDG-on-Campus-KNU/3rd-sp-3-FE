import { create } from "zustand";
import { ChannelState } from "./types";
import { dummyChannels } from "../dummyChannel";

const useStore = create<ChannelState>((set) => ({
  currentChannel: null,
  channels: dummyChannels,
  currentConnectionState: "EXIT",
  setCurrentChannel: (channel) => set({ currentChannel: channel }),
  setChannels: (channels) => set({ channels }),
  setCurrentConnectionState: (state) => set({ currentConnectionState: state }),
}));

export default useStore;
