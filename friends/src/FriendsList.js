import React from 'react';
import FriendCard from "./FriendCard"
import './friends.css';

const FriendsList = ({friends,updateFriends,DeleteFriendList}) => {
    return (
        <div className="friendlist">
            {friends.map((card, index) => {
                return <FriendCard key={index} friends={card} updateFriends={updateFriends} DeleteFriendList={DeleteFriendList} />
            })}
        </div>
    )
}

export default FriendsList