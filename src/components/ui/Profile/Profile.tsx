import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { Iuser } from "./models/UserModel";
import { useState } from "react";

import './Profile.scss'

const Profile = (props:Iuser) => {

    const [notifi, SetNotif] = useState(false);

  return (
    <>
    <div className="containner_profile">
        <div className="prof__ava">
            <CgProfile size={30} />
            <span className="profile_name">{props.name} {props.surname}</span>
        </div>
        <div className="notif">
            {notifi ?(<MdOutlineNotificationImportant size={20} />) : (<IoIosNotifications size={20} />) }           
        </div>
    </div>
    </>
  )
}

export default Profile
