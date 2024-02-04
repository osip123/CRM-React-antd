import { Spin, Flex } from 'antd';
import { useState } from 'react';
import { GroupMpodel } from './GroupModel';

import './Group.scss'

const Group = (props:GroupMpodel) => {

    const [loadGroup, srtloadGroup] = useState([]);
    const [iloadGroup, isrtloadGroup] = useState(false);

  return (
    <>
        <div className="containner_group">
            <span>{props._id}</span>
            <span>{props.name}</span>
            <span>{props.role}</span>
        </div>
    </>
  )
}

export default Group
