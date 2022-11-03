import "./online.css";
import React from 'react'

export default function Online(props) {
  const PF = "https://hello-there-26.netlify.app/assets/";
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={PF+props.user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{props.user.username}</span>
    </li>
  );
}