import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import React from 'react'

export default function Rightbar(props) {
  const FriendList = props.user.friends;
  const Friends= [];
  FriendList.forEach((f) => {
    Users.forEach((u)=>
    {
        if(u.id === f)
        Friends.push(u)
    })
    }
    )
      const PF = "https://hello-there-26.netlify.app/assets/"
    return (
      <div className="rightbar">
        <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src= {PF + "gift.png"} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src={PF+"ad.Jpg"} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Friends.map((f) => (
            <Online key={f.id} user={f} />
          ))}
        </ul>
          </div>
        </div>
    );
  };

  