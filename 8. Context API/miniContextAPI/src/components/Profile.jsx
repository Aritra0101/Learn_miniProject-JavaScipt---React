import React, {useContext} from "react";
import UserContext from "../contexts/userContext";

function Profile() {
    const {user} = useContext(UserContext);

    if(!user)
        return <div>Please Login</div>

    return <div> welcome, {user.email}</div>

}

export default Profile