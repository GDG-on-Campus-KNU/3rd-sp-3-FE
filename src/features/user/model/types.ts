export interface User {
  currentChatRoomId: string | null;
  id: string;
  name: string;
  email: string;
}

export interface UserState {
  currentUser: User | null;
  setUser: (user: User | null) => void;
}
