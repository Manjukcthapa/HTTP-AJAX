import React from 'react';
import FriendCard from "./FriendCard"
import './friends.css';

const FriendsList = props => {
    return (
        <div className="friendlist">
            {props.friends.map((card, index) => {
                return <FriendCard key={index} friends={card} />
            })}
        </div>
    )
}

export default FriendsList