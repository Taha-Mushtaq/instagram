import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiCheckDecagram } from "@mdi/js";
import "./comments.css";
import Avatar from "@mui/material/Avatar";
import { userData } from "../../Data/user";
import { commentsData } from "../../Data/comments";
import { myProfile } from "../../Data/profile";
import moment from "moment";

function Comments() {
  const { postId } = useParams();
  const [postComments, setPostComments] = useState();
  const [comment, setComment] = useState();

  useEffect(() => {
    setPostComments(commentsData.filter((item) => item.postId === postId));
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCommentId =
      Math.max(commentsData.map((item) => Number(item.id))) + 1;
    const obj = {
      id: newCommentId,
      postId,
      userId: myProfile.id,
      comment,
      time: moment().format("Do MMMM YY, hh:mm A"),
    };
    setComment("");
    setPostComments([...postComments, obj]);
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <Link to="/">
        <Icon className="back_icon" path={mdiChevronLeft} size={1.3} />
      </Link>
      <h3 className="comment_heading">Comments</h3>
      {postComments &&
        postComments.map((item) => (
          <div className="comment">
            <Avatar
              src={
                userData.find((user) => user.id === item.userId).profile_picture
              }
              alt="abc"
            />
            <div>
              <strong>
                {userData.find((user) => user.id === item.userId).username}
                {userData.find((user) => user.id === item.userId).isVerified ===
                  "true" && (
                  <Icon path={mdiCheckDecagram} size={0.6} color="#0080ff" />
                )}
              </strong>
              <span>{item.comment}</span>
              <p>{item.time}</p>
            </div>
          </div>
        ))}
      <form className="comment_post" onSubmit={handleSubmit}>
        <Avatar className="post_avatar" src={myProfile.profile_picture} />
        <input
          placeholder="Add a comment"
          value={comment}
          onChange={handleChange}
        />
        <button type="submit" className="post_button">
          Post
        </button>
      </form>
    </div>
  );
}

export default Comments;
