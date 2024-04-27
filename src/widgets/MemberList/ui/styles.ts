import styled from "styled-components";

export const MicrophoneIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: auto;
  opacity: 0.6;
  filter: grayscale(100%);
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ccc;
  margin-right: 10px;
  position: relative;
`;

export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: green;
  position: absolute;
  right: -2px;
  bottom: -2px;
  border: 2px solid #fff;
`;
