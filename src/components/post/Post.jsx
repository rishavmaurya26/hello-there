import "./post.css";
import { MoreVert } from "@mui/icons-material";
//import { Posts } from "../../dummyData";
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";
import React from 'react'
import { useState } from "react";
export default function Post(props) {
 const PF = "http://localhost:3000/assets/"
 const [isliked,setisliked] = useState(0);
 const [like,setlike] = useState(props.post.like);
 let user = {}
  Users.forEach((u)=> {
    if(u.id === props.post.userId)
      user = u;
  })
  const likeHandler = () => {
    setlike(isliked ? like - 1 : like + 1);
    setisliked(!isliked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{props.post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{props.post.desc}</span>
          <img className="postImg" src={PF + props.post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{props.post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}