import { Client } from "@stomp/stompjs";
import { useChatStore } from "@/features/chatroom/model/store";

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
    client.subscribe("/api/sub/1", (message) => {
      const messageBody = JSON.parse(message.body);
      useChatStore.getState().addMessage({
        id: messageBody.id,
        userId: messageBody.senderId,
        sender: messageBody.senderName,
        text: messageBody.content,
        timestamp: new Date(messageBody.timestamp),
      });
    });
  },
  onStompError: (frame) => {
    console.error("Broker error: " + frame.headers["message"]);
    console.error("Details: " + frame.body);
  },
});

client.activate();

export function enterChatRoom(channelId: string, userNickname: string) {
  client.publish({
    destination: `/api/pub/${channelId}/${userNickname}/enter`,
    body: JSON.stringify({ message: "Entering chat room" }),
  });
}
