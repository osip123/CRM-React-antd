import Barmenu from '../ui/BarMenu/Barmenu'
import Profile from '../ui/Profile/Profile'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <Profile src_ava='none' name='Osip' surname='' />
        <Barmenu />
    </aside>
  )
}

export default Sidebar
