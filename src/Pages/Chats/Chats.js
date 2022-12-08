import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { myProfile } from "../../Data/profile";
import { userData } from "../../Data/user";
import "./chats.css";

function Chats() {
  return (
    <div>
      <div className="chat_username">
        <Link to="/">
          <Icon className="back_icon" path={mdiChevronLeft} size={1.3} />
        </Link>
        {myProfile.username}
      </div>
      <form>
        <input placeholder="Search" />
      </form>
      {userData.map((user) => (
        <span className="chats">
          <Avatar src={user.profile_picture} alt="profilepic" />
          <p>{user.username}</p>
        </span>
      ))}
    </div>
  );
}

export default Chats;
