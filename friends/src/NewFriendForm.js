import React from "react"

const NewFriendForm=({addNewFriend,changeHandler}) => {
    
        return(
            <div>
            <form onSubmit={addNewFriend}>
                <input onclick={changeHandler} type="input" placeholder="name" name="name"/>
                <input onclick={changeHandler}type="number" placeholder="age" name="age"/>
                <input onclick={changeHandler}type="email" placeholder="email" name="email"/>
                <button>Add New Friend</button>
            </form>
            </div>

        )
    
}

export default NewFriendForm