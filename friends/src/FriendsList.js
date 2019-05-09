import React from 'react';
import FriendCard from "./FriendCard"
import './friends.css';

const FriendsList = ({friends}) => {
    return (
        <div className="friendlist">
            {friends.map((card, index) => {
                return <FriendCard key={index} friends={card} />
            })}
        </div>
    )
}

export default FriendsList