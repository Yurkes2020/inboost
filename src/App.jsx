import { useEffect, useState, createContext } from 'react';
import { Nav } from './component/Nav/Nav';
import { SideBar } from './component/SideBar/SideBar';
import { WorkSpace } from './component/WorkSpace/WorkSpace';
import axios from 'axios';

export const Context = createContext();

const App = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      return await axios
        .get(
          'https://quintadb.com/apps/ddS8knnSnoW7VdJbXFuZvS/dtypes/entity/aBFIjygHTcKQG6FIFcUSkt.json?rest_api_key=dcU8ogf8nngjWFW6pdLmkF&amp'
        )
        .then((responce) => setData(responce.data.records));
    };
    fetch();
  }, []);

  return (
    <>
      <Context.Provider value={data}>
        <Nav></Nav>
        <div style={{ display: 'flex' }}>
          <SideBar note={setId}></SideBar>
          <WorkSpace idNote={id}></WorkSpace>
        </div>
      </Context.Provider>
    </>
  );
};

export default App;
