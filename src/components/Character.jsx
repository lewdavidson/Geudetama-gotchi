import React from 'react';
import Display from './Display/Display';
import Buttons from './Buttons/Buttons';

export default class Character extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterGeudeInfo: {
        hungerLevel: 20,
        sleepLevel: 20,
        playLevel: 20
      }
    };
    this.handleFeedLevel = this.handleFeedLevel.bind(this);
  }
  handleFeedLevel() {
    const newHunger = this.state.masterGeudeInfo;
    newHunger.hungerLevel += 20;
    this.setState({hungerLevel: newHunger.hungerLevel});
  }
  render() {
    return (
      <div>
        <Display guedeInfo={this.state.masterGeudeInfo}/>
        <Buttons onHandleFeed={this.handleFeedLevel}/>
      </div>
    );
  }
}




// const GeudeInfo = {
//   hungerLevel: 100,
//   sleepLevel: 100,
//   playLevel: 100
// };
