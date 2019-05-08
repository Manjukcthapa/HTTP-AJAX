import React from "react";

const FriendCard = ({ friends }) => {
    return (
    <div>
          <p>{friends.id}</p>
        <p>{friends.name}</p>
        <p>{friends.age}</p>
        <p>{friends.email}</p>
        <p> {friends.id}</p>
    </div>)
}

export default FriendCard;