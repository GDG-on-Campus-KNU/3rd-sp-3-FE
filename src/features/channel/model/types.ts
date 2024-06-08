import { Message } from "@/features/chatroom/model/types";

export interface Channel {
  id: string;
  name: string;
  description?: string;
  members: Member[];
  documents: Document[];
  chatRooms: ChatRoom[];
  voiceRooms: VoiceRoom[];
}

export interface Item {
  id: string;
  name: string;
  microphoneStatus?: "on" | "off";
}

export interface ItemListProps {
  label: string;
  items: Item[];
  addItem?: () => void;
  renderIconBefore?: (item: Item) => React.ReactNode;
  renderIconAfter?: (item: Item) => React.ReactNode;
}

export interface ChannelState {
  currentChannel: Channel | null;
  channels: Channel[];
  currentConnectionState: "ENTER" | "EXIT";
  setCurrentChannel: (channel: Channel | null) => void;
  setChannels: (channels: Channel[]) => void;
  setCurrentConnectionState: (state: "ENTER" | "EXIT") => void;
}

export interface Member {
  id: string;
  name: string;
  microphoneStatus: "on" | "off";
}

export interface ChatRoom {
  id: string;
  name: string;
  messages: Message[];
}

export interface Document {
  id: string;
  title: string;
}

export interface VoiceRoom {
  id: string;
  name: string;
}
