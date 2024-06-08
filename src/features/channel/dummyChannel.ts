import { Channel } from "./model/types";

export const dummyChannels: Channel[] = [
  {
    id: "1",
    name: "프로젝트 채널 1",
    description: "프로젝트 채널 1에 대한 소개입니다.",
    members: [
      { id: "m1", name: "사용자1", microphoneStatus: "on" },
      { id: "m2", name: "사용자2", microphoneStatus: "on" },
      { id: "m3", name: "사용자3", microphoneStatus: "off" },
    ],
    documents: [
      { id: "doc1", title: "문서1" },
      { id: "doc2", title: "문서2" },
      { id: "doc3", title: "문서3" },
    ],
    chatRooms: [{ id: "chat1", name: "채팅방", messages: [] }],
    voiceRooms: [
      { id: "voice1", name: "회의실1" },
      { id: "voice2", name: "회의실2" },
    ],
  },
  {
    id: "2",
    name: "프로젝트 채널 2",
    description: "프로젝트 채널 2에 대한 소개입니다.",
    members: [
      { id: "m1", name: "사용자1", microphoneStatus: "on" },
      { id: "m2", name: "사용자2", microphoneStatus: "on" },
    ],
    documents: [
      { id: "doc1", title: "문서1" },
      { id: "doc2", title: "문서2" },
    ],
    chatRooms: [{ id: "chat1", name: "채팅방", messages: [] }],
    voiceRooms: [
      { id: "voice1", name: "회의실1" },
      { id: "voice2", name: "회의실2" },
    ],
  },
  {
    id: "3",
    name: "프로젝트 채널 3",
    description: "프로젝트 채널 3에 대한 소개입니다.",
    members: [
      { id: "m1", name: "사용자1", microphoneStatus: "on" },
      { id: "m2", name: "사용자2", microphoneStatus: "on" },
      { id: "m3", name: "사용자3", microphoneStatus: "on" },
    ],
    documents: [
      { id: "doc1", title: "문서1" },
      { id: "doc2", title: "문서2" },
      { id: "doc3", title: "문서3" },
      { id: "doc4", title: "문서4" },
      { id: "doc5", title: "문서5" },
    ],
    chatRooms: [{ id: "chat1", name: "채팅방", messages: [] }],
    voiceRooms: [
      { id: "voice1", name: "회의실1" },
      { id: "voice2", name: "회의실2" },
    ],
  },
  {
    id: "4",
    name: "프로젝트 채널 4",
    description: "프로젝트 채널 4에 대한 소개입니다.",
    members: [{ id: "m1", name: "사용자1", microphoneStatus: "off" }],
    documents: [{ id: "doc1", title: "문서1" }],
    chatRooms: [{ id: "chat1", name: "채팅방", messages: [] }],
    voiceRooms: [
      { id: "voice1", name: "회의실1" },
      { id: "voice2", name: "회의실2" },
    ],
  },
  {
    id: "5",
    name: "프로젝트 채널 5",
    description: "프로젝트 채널 5에 대한 소개입니다.",
    members: [
      { id: "m1", name: "사용자1", microphoneStatus: "on" },
      { id: "m2", name: "사용자2", microphoneStatus: "off" },
    ],
    documents: [
      { id: "doc1", title: "문서1" },
      { id: "doc2", title: "문서2" },
      { id: "doc3", title: "문서3" },
    ],
    chatRooms: [{ id: "chat1", name: "채팅방", messages: [] }],
    voiceRooms: [
      { id: "voice1", name: "회의실1" },
      { id: "voice2", name: "회의실2" },
    ],
  },
  {
    id: "6",
    name: "프로젝트 채널 6",
    description: "프로젝트 채널 6에 대한 소개입니다.",
    members: [
      { id: "m1", name: "사용자1", microphoneStatus: "on" },
      { id: "m2", name: "사용자2", microphoneStatus: "on" },
      { id: "m3", name: "사용자3", microphoneStatus: "off" },
      { id: "m4", name: "사용자4", microphoneStatus: "on" },
    ],
    documents: [
      { id: "doc1", title: "문서1" },
      { id: "doc2", title: "문서2" },
      { id: "doc3", title: "문서3" },
    ],
    chatRooms: [{ id: "chat1", name: "채팅방", messages: [] }],
    voiceRooms: [
      { id: "voice1", name: "회의실1" },
      { id: "voice2", name: "회의실2" },
    ],
  },
  {
    id: "7",
    name: "프로젝트 채널 7",
    description: "프로젝트 채널 7에 대한 소개입니다.",
    members: [
      { id: "m1", name: "사용자1", microphoneStatus: "on" },
      { id: "m2", name: "사용자2", microphoneStatus: "on" },
      { id: "m3", name: "사용자3", microphoneStatus: "off" },
      { id: "m4", name: "사용자4", microphoneStatus: "on" },
      { id: "m5", name: "사용자5", microphoneStatus: "off" },
    ],
    documents: [
      { id: "doc1", title: "문서1" },
      { id: "doc2", title: "문서2" },
      { id: "doc3", title: "문서3" },
    ],
    chatRooms: [{ id: "chat1", name: "채팅방", messages: [] }],
    voiceRooms: [
      { id: "voice1", name: "회의실1" },
      { id: "voice2", name: "회의실2" },
    ],
  },
];
