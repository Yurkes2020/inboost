import { useContext } from 'react';
import { Aside, Item } from './SideBar.styled';
import { Context } from '../../App';

export const SideBar = ({ note }) => {
  const user = useContext(Context);

  const showNote = (id) => {
    note(id);
    console.log(this);
  };

  return (
    <Aside>
      <ul>
        {user &&
          user.map(({ values, id }) => {
            return (
              <Item onClick={() => showNote(id)} key={id}>
                {values.b3W5vewSjiW5f0WOddHNOk}
              </Item>
            );
          })}
      </ul>
    </Aside>
  );
};
