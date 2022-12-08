import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { messagesData } from "../../Data/messages";
import { userData } from "../../Data/user";
import { myProfile } from "../../Data/profile";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiCheckDecagram } from "@mdi/js";
import Avatar from "@mui/material/Avatar";
import Badge from "react-bootstrap/Badge";
import "./message.css";

function Message() {
  const { userId } = useParams();
  const [userProfile, setUserProfile] = useState("");
  const [messages, setMessages] = useState();

  useEffect(() => {
    setUserProfile(userData.find((user) => user.id === userId));
    setMessages(
      messagesData.filter(
        (message) =>
          (message.senderId === userId &&
            message.receiverId === myProfile.id) ||
          (message.receiverId === userId && message.senderId === myProfile.id)
      )
    );
  }, [userId]);
  return (
    <div>
      {userProfile && (
        <div>
          <span className="user_name">
            <Link to={{ pathname: `/Profile/${userId}` }}>
              <Icon className="back_icon" path={mdiChevronLeft} size={1.3} />
            </Link>
            <Avatar
              alt={userProfile.username}
              src={userProfile.profile_picture}
              sx={{ width: 40, height: 40, marginleft: 5 }}
            />
            {userProfile.username}
            {userProfile.isVerified === "true" && (
              <Icon path={mdiCheckDecagram} size={1} color="#0080ff" />
            )}
          </span>
          <div className="message_container">
            {messages.map((item, index) => (
              <div
                className={
                  item.senderId === userId
                    ? "sender_message"
                    : "receive_message"
                }
              >
                <Badge
                  key={index}
                  bg={item.senderId === userId ? "primary" : "dark"}
                >
                  {item.message}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
