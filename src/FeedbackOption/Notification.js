import React from "react";
import s from'./Feedback.module.css'
function Notification({message}) {
    console.log(message);

    return(
        <p className={s.notification}>{message}</p>
    )
}

export default Notification