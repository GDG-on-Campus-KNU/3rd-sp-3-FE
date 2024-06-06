import { Label } from "@/shared/styles/Label";
import { AddButton } from "@/shared/styles/AddButton";
import { ListContainer, Header, ListItem, ItemName } from "./styles";
import { ItemListProps } from "@/features/channel/model/types";

export const ItemList: React.FC<ItemListProps> = ({
  label,
  items,
  addItem,
  renderIconBefore,
  renderIconAfter,
}) => {
  return (
    <ListContainer>
      <Header>
        <Label>{label}</Label>
        {addItem && <AddButton onClick={addItem}>+</AddButton>}
      </Header>
      {items.map((item) => (
        <ListItem key={item.id}>
          {renderIconBefore && renderIconBefore(item)}
          <ItemName>{item.name}</ItemName>
          {renderIconAfter && renderIconAfter(item)}
        </ListItem>
      ))}
    </ListContainer>
  );
};
