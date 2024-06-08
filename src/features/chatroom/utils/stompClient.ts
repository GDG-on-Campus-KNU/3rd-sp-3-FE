import { Client } from "@stomp/stompjs";
import { useChatStore } from "@/features/chatroom/model/store";
import useStore from "@/features/channel/model/store";

export const client = new Client({
  brokerURL: "ws://localhost:8080/stomp",
  connectHeaders: {
    login: "user",
    passcode: "password",
  },
  debug: (str) => {
    console.log(str);
  },
  reconnectDelay: 5000,
  onConnect: () => {
    console.log("Connected!");
  },
  onStompError: (frame) => {
    console.error("Broker error: " + frame.headers["message"]);
    console.error("Details: " + frame.body);
  },
  onDisconnect: () => {
    console.log("Disconnected");
  },
});

client.activate();

export function enterChatRoom(channelId: string, userNickname: string) {
  const { currentConnectionState, setCurrentConnectionState } =
    useStore.getState();
  const newConnectionState =
    currentConnectionState === "ENTER" ? "EXIT" : "ENTER";
  setCurrentConnectionState(newConnectionState);

  if (client.connected) {
    client.publish({
      destination: `/api/pub/${channelId}/state`,
      body: JSON.stringify({
        userNickname,
        connectionState: newConnectionState,
      }),
    });
  }
}

export function subscribeToChatRoom(channelId: string) {
  client.subscribe(`/api/sub/${channelId}`, (message) => {
    const { addMessage } = useChatStore.getState();
    const receivedMessage = JSON.parse(message.body);
    if (receivedMessage.connectionState) {
      console.log(
        `User ${receivedMessage.userNickname} has ${
          receivedMessage.connectionState === "ENTER" ? "entered" : "exited"
        } the room.`
      );
    } else {
      addMessage({
        id: receivedMessage.id,
        userId: receivedMessage.senderId,
        sender: receivedMessage.senderName,
        text: receivedMessage.content,
        timestamp: new Date(receivedMessage.timestamp),
      });
    }
  });
}
