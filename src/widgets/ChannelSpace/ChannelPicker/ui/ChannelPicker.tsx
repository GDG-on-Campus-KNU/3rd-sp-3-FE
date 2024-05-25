import useStore from "@/features/channel/model/store";
import { ChannelIcon } from "./PickerStyles";

export const ChannelPicker: React.FC = () => {
  const { channels, setCurrentChannel } = useStore((state) => ({
    channels: state.channels,
    setCurrentChannel: state.setCurrentChannel,
  }));

  const handleChannelSelect = (channelId: string) => {
    const channel = channels.find((ch) => ch.id === channelId);
    if (channel) {
      setCurrentChannel(channel);
    }
  };

  return (
    <>
      {channels.map((channel) => (
        <ChannelIcon
          key={channel.id}
          onClick={() => handleChannelSelect(channel.id)}
        >
          {channel.name[0]}
        </ChannelIcon>
      ))}
    </>
  );
};
