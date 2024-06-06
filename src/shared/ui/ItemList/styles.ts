import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #b4b4b4;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

export const ItemName = styled.span`
  font-size: 14px;
  color: #333;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
