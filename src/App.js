import React, {Component} from "react";
import Section from "./ssection/Section";
import Feedback from './Feedback/Feedback'

class App extends Component {


render(){ return (
  <>
    <Section sectionName='Please leave feedback' component = {this.state} >
  <Feedback />
  </Section>


    <Section sectionName='Statistics' />

  </>
    )

}


}

export default App;
