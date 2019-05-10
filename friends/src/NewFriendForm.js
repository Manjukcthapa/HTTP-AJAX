import React from "react"
import './friends.css'

const NewFriendForm = ({ addNewFriend, changeHandler, name, age, email }) => {

    return (
        <div className="friendform">
            <form onSubmit={addNewFriend}>
                <input className="friends" onChange={changeHandler} type="text" placeholder="name" name="name" value={name} />
                <input className="friends" onChange={changeHandler} type="number" placeholder="age" name="age" value={age} />
                <input className="friends" onChange={changeHandler} type="email" placeholder="email" name="email" value={email} />
                <button className="buttonform" type="submit">Add New Friend</button>
            </form>
        </div>

    )

}

export default NewFriendForm