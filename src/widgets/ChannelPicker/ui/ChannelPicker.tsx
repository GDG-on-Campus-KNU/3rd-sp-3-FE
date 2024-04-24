import useStore from "@/features/channel/model/store";
import { ChannelIcon } from "./PickerStyles";

export const ChannelPicker: React.FC = () => {
  const { channels, setCurrentChannel } = useStore((state) => ({
    channels: state.channels,
    setCurrentChannel: state.setCurrentChannel,
  }));

  return (
    <>
      {channels.map((channel) => (
        <ChannelIcon
          key={channel.id}
          onClick={() => setCurrentChannel(channel)}
        >
          {channel.name[0]}
        </ChannelIcon>
      ))}
    </>
  );
};
