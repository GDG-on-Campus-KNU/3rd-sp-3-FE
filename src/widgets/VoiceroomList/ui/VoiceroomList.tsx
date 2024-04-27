import useStore from "@/features/channel/model/store";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import VoiceIcon from "@/assets/voice.png";

const renderVoiceRoomIcon = () => (
  <img
    src={VoiceIcon}
    alt="Voice Room"
    style={{ width: "24px", height: "24px", marginRight: "10px" }}
  />
);

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
      renderIconBefore={renderVoiceRoomIcon}
    />
  );
};
