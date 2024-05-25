import { create } from "zustand";
import { ChatState } from "@/features/chatroom/model/types";

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (newMessage) =>
    set((state) => ({
      messages: [...state.messages, newMessage],
    })),
  setMessages: (messages) =>
    set(() => ({
      messages,
    })),
}));
