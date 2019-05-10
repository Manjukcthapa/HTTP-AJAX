import React from "react";
import './friends.css';

const FriendCard = ({ friends,updateFriends, deleteFriendButton}) => {
    return (
    <div className="friendscard">
        <p>{friends.id}</p>
        <p>Friendname: {friends.name}</p>
        <p>Age: {friends.age}</p>
        <p>Email: {friends.email}</p>
        <button onClick={updateFriends} id={friends.id}>Update</button>
        <button onClick= {deleteFriendButton} id={friends.id}>Delete</button>
       
    </div>)
}

export default FriendCard;