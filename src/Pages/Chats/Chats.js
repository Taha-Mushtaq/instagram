import React, { useEffect, useState } from "react";
import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { myProfile } from "../../Data/profile";
import { userData } from "../../Data/user";
import "./chats.css";
import { messagesData } from "../../Data/messages";

function Chats() {
  const chatUsers = userData.filter((user) => user.id !== myProfile.id);
  const [search, setSearch] = useState();
  const [chatUserToShow, setChatUserToShow] = useState();

  useEffect(() => {
    if (search)
      setChatUserToShow(
        chatUsers.filter((user) =>
          user.username.toLowerCase().includes(search.toLowerCase())
        )
      );
    else setChatUserToShow(chatUsers);
  }, [search, chatUsers]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="chat_username">
        <Link to="/">
          <Icon className="back_icon" path={mdiChevronLeft} size={1.3} />
        </Link>
        {myProfile.username}
      </div>
      <form>
        <input
          placeholder="Search"
          onChange={handleChange}
          className="search"
        />
      </form>
      <div className="userContainer">
        {chatUserToShow &&
          chatUserToShow.map((user, index) => (
            <span className="chats_list" key={index}>
              <Avatar src={user.profile_picture} alt="profilepic" />
              <div>
                <span>{user.username}</span>
                <p>
                  {
                    messagesData
                      .filter(
                        (message) =>
                          (message.senderId === myProfile.id &&
                            message.receiverId === user.id) ||
                          (message.receiverId === myProfile.id &&
                            message.senderId === user.id)
                      )
                      .at(-1).message
                  }
                </p>
              </div>
            </span>
          ))}
      </div>
    </div>
  );
}

export default Chats;
