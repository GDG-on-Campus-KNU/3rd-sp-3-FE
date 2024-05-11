import { User } from "@/features/user/model/types";

interface Message {
  id: number;
  userId: string;
  sender: string;
  text: string;
}

export interface MessageListProps {
  messages: Message[];
  currentUser: User | null;
}

export interface MessageInputAreaProps {
  inputRef: React.RefObject<HTMLTextAreaElement>;
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (event: React.SyntheticEvent) => void;
  handleInput: (inputRef: HTMLTextAreaElement | null) => void;
}
