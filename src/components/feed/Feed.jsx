import { Posts } from "../../dummyData";
import Share from "../share/Share";
import Post from "../post/Post";
import "./Feed.css";
import React from 'react'
export default function Feed(props) {
var postList =[]
if(props.user)
{
  var friendlist = props.user.friends
//friendlist.push(props.user.id)
friendlist.forEach((e) => {
const templist = Posts.filter((p) => {
      return (e === p.userId || props.user.id === p.userId); 
  }
  )
    postList= postList.concat(templist)
})
}
// console.log(postList)
if(props.user === "")
{
  friendlist = []
  friendlist.push(props.user.id)
}
  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* {(!username || username === props.username) && <Share />} */}
        <Share user={props.user?props.user:props.me}/>
        {postList.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}