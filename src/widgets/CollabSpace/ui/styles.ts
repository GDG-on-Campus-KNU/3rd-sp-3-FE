import styled, { createGlobalStyle } from "styled-components";

export const BlockNoteStyles = createGlobalStyle`
  .bn-container, .bn-editor {
    height: 100%;
  }

  .bn-editor { 
    padding-top: 1rem;
  }
`;

export const BlockNoteWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
