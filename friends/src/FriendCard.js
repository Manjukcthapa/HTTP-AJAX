import React from "react";
import './friends.css';

const FriendCard = ({ friends,updateFriends, deleteFriendButton}) => {
    return (
    <div className="friendscard">
        <p className = "card" >{friends.id}</p>
        <p className = "card">Friendname: {friends.name}</p>
        <p className = "card">Age: {friends.age}</p>
        <p className = "card">Email: {friends.email}</p>
        <button onClick={updateFriends} id={friends.id}>Update</button>
        <button onClick= {deleteFriendButton} id={friends.id}>Delete</button>
       
    </div>)
}

export default FriendCard;