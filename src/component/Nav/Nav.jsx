import { List, Header, Search, Button } from './Nav.styled';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';

export const Nav = () => {
  return (
    <Header>
      <List>
        <li>
          <Button type="button">
            <AddIcon></AddIcon>
          </Button>
        </li>
        <li>
          <Button type="button">
            <DeleteForeverIcon></DeleteForeverIcon>
          </Button>
        </li>
        <li>
          <Button type="button">
            <EditNoteIcon></EditNoteIcon>
          </Button>
        </li>
      </List>
      <Search placeholder="search" type="search" />
    </Header>
  );
};
