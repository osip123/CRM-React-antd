import { NavLink } from "react-router-dom"

import './Btn.scss'

interface LinkNtn{
    title: string,
    path: string,
}

const BarBtn = (props:LinkNtn) => {
  return <NavLink className='link' to={props.path}>{props.title}</NavLink>
}

export default BarBtn
