import useStore from "@/features/channel/model/store";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { ChatBubbleIcon } from "@/shared/assets/icons/StyledIcon";

export const ChatroomList: React.FC = () => {
  const { currentChannel } = useStore((state) => ({
    currentChannel: state.currentChannel,
  }));

  return (
    <ItemList
      label="채팅방"
      items={
        currentChannel?.chatRooms.map((room) => ({
          id: room.id,
          name: room.name,
        })) || []
      }
      renderIconBefore={() => <ChatBubbleIcon />}
    />
  );
};
