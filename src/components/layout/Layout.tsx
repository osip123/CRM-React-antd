import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <Sidebar />
        <Outlet />
    </>
  )
}

export default Layout
