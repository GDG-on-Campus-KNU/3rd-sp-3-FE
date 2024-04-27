export interface ChatMessage {
  senderId: string;
  content: string;
  timestamp: Date;
}

export interface ChatRoom {
  id: string;
  name: string;
  messages: ChatMessage[];
}

export interface Channel {
  id: string;
  name: string;
  description?: string;
  members: Member[];
  // documents: string[];
  // chatRooms: ChatRoom[];
  // voiceChatParticipants: string[];
}

export interface ChannelState {
  currentChannel: Channel | null;
  channels: Channel[];
  setCurrentChannel: (channel: Channel | null) => void;
  setChannels: (channels: Channel[]) => void;
  sendMessage: (chatRoomId: string, message: ChatMessage) => void;
}

export interface Member {
  name: string;
  microphoneStatus: "on" | "off";
}
