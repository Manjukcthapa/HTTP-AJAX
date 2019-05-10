import React from 'react';
import FriendCard from "./FriendCard"
import './friends.css';

const FriendsList = props => {
    return (
        <div className="friendlist">
            {props.friends.map((card, id) => {
                return <FriendCard key={id} friends={card} updateFriends={props.updateFriends} 
                deleteFriendButton = {props.deleteFriendButton}/>
            })}
        </div>
    )
}

export default FriendsList