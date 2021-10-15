import React from "react";
import s from './Feedback.module.css'

function FeedbackBtn({props, feedback}) {
     const buttonName = Object.keys(props)
     const btnClasses = [s.buttonitem];
   
return (
    <ul className ={s.buttonList}>
    {buttonName.map(name => 
                <li key={name} >
                <button className={btnClasses.join(' ')} type='button' name={name} onClick={feedback}>{name}</button>
                 </li>  )}
       </ul>
)

}

export default FeedbackBtn