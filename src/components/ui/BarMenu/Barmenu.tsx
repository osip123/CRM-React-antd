import BarBtn from "./BarBtn"
import { menuItems } from "./list"

import './Bar.scss'

const Barmenu = () => {
  return (
    <menu>
      {menuItems.map((menuItem) => (
        <BarBtn title={menuItem.title} path={menuItem.path} />
      ))}
    </menu>
  )
}

export default Barmenu