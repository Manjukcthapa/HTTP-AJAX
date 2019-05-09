import React from "react"

const NewFriendForm=({addNewFriend,changeHandler, name,age,email}) => {
    
        return(
            <div>
            <form onSubmit={addNewFriend}>
                <input onChange={changeHandler} type="text" placeholder="name" name="name" value={name}/>
                <input onChange={changeHandler}type="text" placeholder="age" name="age" value={age}/>
                <input onChange={changeHandler}type="text" placeholder="email" name="email" value={email}/>
                <button type="submit">Add New Friend</button>
            </form>
            </div>

        )
    
}

export default NewFriendForm