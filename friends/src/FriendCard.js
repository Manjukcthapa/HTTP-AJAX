import React from "react";
import './friends.css';

const FriendCard = ({ friends,updateFriends, DeleteFriendList }) => {
    return (
    <div className="friendscard">
          
        <p>Friendname: {friends.name}</p>
        <p>Age: {friends.age}</p>
        <p>Email: {friends.email}</p>
        <button onClick= {updateFriends}>Update</button>
        <button onClick= {DeleteFriendList}>Delete</button>
       
    </div>)
}

export default FriendCard;