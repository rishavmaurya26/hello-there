import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import ProfileRightbar from "../../components/profilerightbar/ProfileRightbar";
import { Users } from "../../dummyData";
import { useParams } from "react-router";
import React from 'react'
export default function Profile() {
  const PF = "https://hello-there-26.netlify.app/assets/"
  const username = useParams().username;
  console.log(username)
  var user = {}
  Users.forEach((u)=> {
    if(u.username === username)
      user = u;
  })
  console.log(user)
  return (
    <>
      <Topbar user={user}/>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.jpg"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed user={null} me={user}/>
            <ProfileRightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}