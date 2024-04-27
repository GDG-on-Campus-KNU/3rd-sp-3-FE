import useStore from "@/features/channel/model/store";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { VoiceIcon } from "@/shared/assets/icons/StyledIcon";

export const VoiceroomList: React.FC = () => {
  const { currentChannel } = useStore((state) => ({
    currentChannel: state.currentChannel,
  }));

  return (
    <ItemList
      label="음성"
      items={
        currentChannel?.voiceRooms.map((room) => ({
          id: room.id,
          name: room.name,
        })) || []
      }
      renderIconBefore={() => <VoiceIcon />}
    />
  );
};
