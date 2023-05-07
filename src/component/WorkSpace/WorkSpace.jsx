import { Main } from './WorkSpace.styled';
import { useContext } from 'react';

import { Context } from '../../App';

export const WorkSpace = ({ idNote }) => {
  const user = useContext(Context);

  const note = user.find((item) => item.id === idNote);
  console.log(note);
  return (
    <Main>
      <p>{note}</p>
    </Main>
  );
};
