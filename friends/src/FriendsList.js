import React from 'react';
import FriendCard from "./FriendCard"

const FriendsList = props => {
    return (
        <div>
            {props.friends.map((card, index) => {
                return <FriendCard key={index} friends={card} />
            })}
        </div>
    )
}

export default FriendsList