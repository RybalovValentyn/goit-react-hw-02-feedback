import React, {Component} from "react";
import Section from "./ssection/Section";
import FeedbackBtn from "./FeedbackOption/FeedbackBtn";
import Statistics from './FeedbackOption/Statistics';
import Notification from './FeedbackOption/Notification'
class FeedbackApp extends Component {
    state = {   
        good: 0,
        neutral: 0,
        bad: 0,
          }

          onIncrement = (event) => {              
              const {name} = event.currentTarget ;
              this.setState(prevState => ({ [name]: prevState[name] + 1})); 
            //   this.countTotalFeedback(this.state)
                        }

onStatisticRender =() => {
    console.log('state',this.state)
}

// countTotalFeedback=({good, neutral, bad}) => {
//     console.log({good, neutral, bad});
//     // const {good, neutral, bad} = this.state
// // const total = (this.state.good + this.state.neutral + this.state.bad)
// const total = ({good} + {neutral} + {bad})
// console.log('total', total);
// }
render(){
    return(
        <>

             <Section sectionName='Please leave feedback'  >
                <FeedbackBtn props={this.state} feedback = {this.onIncrement} onClick={this.onStatisticRender}/>
               </Section>

               <Section sectionName='Statistics'>

                   {this.state.bad || this.state.good || this.state.neutral ? <Statistics props={this.state} statistics = {this.onStatisticRender} /> :
                   <Notification message="No feedback given"></Notification>}
                              
                              
               </Section>
        </>
    )
}

}

export default FeedbackApp