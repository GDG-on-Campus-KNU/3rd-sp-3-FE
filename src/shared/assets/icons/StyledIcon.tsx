import styled from "styled-components";
import ChatBubbleIconSrc from "@/assets/chat.png";
import DocumentIconSrc from "@/assets/document.png";
import VoiceIconSrc from "@/assets/voice.png";
import MicOnIconSrc from "@/assets/mic.png";
import MicOffIconSrc from "@/assets/mute.png";

export const ChatBubbleIcon = styled.img.attrs({
  src: ChatBubbleIconSrc,
  alt: "Chat Room",
})`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  opacity: 0.5;
  filter: grayscale(100%);
`;

export const DocumentIcon = styled.img.attrs({
  src: DocumentIconSrc,
  alt: "Document",
})`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  opacity: 0.5;
  filter: grayscale(100%);
`;

export const VoiceIcon = styled.img.attrs({
  src: VoiceIconSrc,
  alt: "Voice Room",
})`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  opacity: 0.5;
  filter: grayscale(100%);
`;

export const MicOnIcon = styled.img.attrs({
  src: MicOnIconSrc,
  alt: "Microphone On",
})`
  width: 18px;
  height: 18px;
  margin-left: auto;
  opacity: 0.5;
  filter: grayscale(100%);
`;

export const MicOffIcon = styled.img.attrs({
  src: MicOffIconSrc,
  alt: "Microphone Off",
})`
  width: 18px;
  height: 18px;
  margin-left: auto;
  opacity: 0.2;
  filter: grayscale(100%);
`;
