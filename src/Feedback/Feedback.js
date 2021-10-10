import React, {Component} from "react";
import s from './Feedback.module.css'

class Feedback extends Component {
    state = {   
        good: 0,
        neutral: 0,
        bad: 0
      }


render(){
const buttonName = Object.keys(this.state)
   console.log(buttonName)
return (
    <ul>
        {buttonName.map(name =>
        <li key={name}>
        <button type='button' name={name}>{name}</button>
        </li>
          
        )}
      
    </ul>
)

}      
}

export default Feedback