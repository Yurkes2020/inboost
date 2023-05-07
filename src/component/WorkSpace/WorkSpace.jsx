import { Main } from './WorkSpace.styled';
import { useContext } from 'react';

import { Context } from '../../App';

export const WorkSpace = ({ idNote }) => {
  const user = useContext(Context);

  const note = user.find((item) => item.id === idNote);

  return (
    <Main>
      <p>{note && note.values.b3W5vewSjiW5f0WOddHNOk}</p>
    </Main>
  );
};
