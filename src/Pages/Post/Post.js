import React from "react";
import { PostData } from "../../Data/post";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import "./post.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

function Post() {
  const [changeHeartIcon, setChangeHeartIcon] = React.useState(false);

  return (
    <div>
      {PostData.map((post, index) => (
        <div key={index} className="post">
          <div className="post__header">
            <Link to={{ pathname: `/Profile/${post.userId}` }}>
              <Avatar
                className="post__avatar"
                alt={post.username}
                src={post.profile_picture}
              />
            </Link>

            <div>
              <strong>{post.username}</strong>
              <p style={{ margin: 0 }}>{post.usernameDes}</p>
            </div>
          </div>
          <img className="post__image" src={post.postImg} alt="" />
          <div className="post__text">
            <strong>{post.username}</strong> {post.postCaption}
            <ul className="list-unstyled d-flex">
              <li className="icons">
                {!changeHeartIcon && (
                  <AiOutlineHeart
                    size="38px"
                    onClick={() => setChangeHeartIcon(!changeHeartIcon)}
                  />
                )}

                {changeHeartIcon && (
                  <AiFillHeart
                    size="38px"
                    style={{ color: "red" }}
                    onClick={() => setChangeHeartIcon(!changeHeartIcon)}
                  />
                )}
              </li>
              <li>
                <Link to={{ pathname: `/Comments/${post.id}` }}>
                  <FaRegComment style={{ color: "black" }} size="36px" />
                </Link>
              </li>
            </ul>
            <Link
              className="comments_link"
              to={{ pathname: `/Comments/${post.id}` }}
            >
              View all comments
            </Link>
            <p style={{ margin: 0 }}>{post.Time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
