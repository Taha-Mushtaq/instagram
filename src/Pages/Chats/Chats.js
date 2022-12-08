import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { Link } from "react-router-dom";
import { myProfile } from "../../Data/profile";
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

    </div>
  );
}

export default Chats;
