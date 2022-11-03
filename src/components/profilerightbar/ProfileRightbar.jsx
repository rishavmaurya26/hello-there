import "./profilerightbar.css";
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";
export default function ProfileRightbar(props) {
    var Friends= [];
    const username = useParams().username;
    const PF = "https://hello-there-26.netlify.app/assets/";
    const FriendList =  props.user.friends;
    console.log(FriendList)
    FriendList.forEach((f) => {
    Users.forEach((u) => {
        if (u.id === f)
            Friends.push(u)
    })
}
)
    let followed = 0
    const handleClick = () => {
        followed = !followed;
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {username!=="" && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {followed ? "Add friend" : "Unfriend"}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Patna</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Bihar, India</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">
                            {props.user.relationship === 1
                                ? "Single"
                                : props.user.relationship === 1
                                    ? "Married"
                                    : "-"}
                        </span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    {Friends.map((friend) => (
                        <Link
                            to={"/profile/" + friend.username}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="rightbarFollowing">
                                <img
                                    src={
                                        friend.profilePicture
                                            ? PF + friend.profilePicture
                                            : PF + "person/noAvatar.png"
                                    }
                                    alt=""
                                    className="rightbarFollowingImg"
                                />
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}