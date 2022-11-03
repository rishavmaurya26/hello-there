import "./closeFriend.css";
import React from 'react'

export default function CloseFriend({user}) {
  const PF = "https://hello-there-26.netlify.app/assets/"
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}