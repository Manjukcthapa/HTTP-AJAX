import React from "react";
import './friends.css';

const FriendCard = ({ friends }) => {
    return (
    <div className = "friendscard">
          <p>name:{friends.id}</p>
        <p>Friendname:{friends.name}</p>
        <p>Age:{friends.age}</p>
        <p>Email:{friends.email}</p>
    </div>)
}

export default FriendCard;