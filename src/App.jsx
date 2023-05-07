import { Nav } from './component/Nav/Nav';
import { SideBar } from './component/SideBar/SideBar';
import { WorkSpace } from './component/WorkSpace/WorkSpace';

const App = () => {
  return (
    <>
      <Nav></Nav>
      <div style={{ display: 'flex' }}>
        <SideBar></SideBar>
        <WorkSpace></WorkSpace>
      </div>
    </>
  );
};

export default App;
