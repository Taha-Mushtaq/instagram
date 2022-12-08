import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { userData } from "../../Data/user";
import { PostData } from "../../Data/post";
import Avatar from "@mui/material/Avatar";
import { mdiCheckDecagram, mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import "./profile.css";
import { ImageList, ImageListItem } from "@mui/material";


function Profile() {
  const [userProfile, setUserProfile] = useState("");
  const [userPost, setUserPost] = useState("");
  const { userId } = useParams();
  useEffect(() => {
    setUserProfile(userData.find((user) => user.id === userId));
    setUserPost(PostData.filter((post) => userId === post.userId));
  }, [userId]);

  return (
    <div>
      {userProfile && (
        <div>
          <span className="user_name">
            <Link to="/">
              <Icon className="back_icon" path={mdiChevronLeft} size={1.3} />
            </Link>
            {userProfile.username}
            {userProfile.isVerified === "true" && (
              <Icon path={mdiCheckDecagram} size={1} color="#0080ff" />
            )}
          </span>
          <span className="profile_stats">
            <Avatar
              alt={PostData.username}
              src={userProfile.profile_picture}
              sx={{ width: 70, height: 70, margin: 2 }}
            />
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td>
                    <h5>Posts</h5>
                  </td>
                  <td>
                    <h5>Following</h5>
                  </td>
                  <td>
                    <h5>Followers</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>{userPost.length}</h4>
                  </td>
                  <td>
                    <h4>{userProfile.following}</h4>
                  </td>
                  <td>
                    <h4>{userProfile.followers}</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </span>
          <div style={{ margin: 6 }}>
            <strong>{userProfile.username}</strong>
            <p className="user_des">{userProfile.usernameDes}</p>
            <p className="profile_bio">{userProfile.bio}</p>
            <Link to={{ pathname: `/message/${userProfile.id}` }}>
              <button type="button" className="btn btn-secondary">
                Message
              </button>
            </Link>
          </div>
          <ImageList sx={{ width: 1000, height: 950 }} cols={3} rowHeight={300}>
            {userPost.map((post) => (
              <ImageListItem key={post.postImg}>
                <img
                  src={`${post.postImg}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${post.postImg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt="post"
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      )}
    </div>
  );
}

export default Profile;
