import React from 'react';
import Display from './Display/Display';
import Buttons from './Buttons/Buttons';
import baby from '../assets/baby.gif';
import bento from '../assets/bento.png';
import chopsticks from '../assets/chopsticks.png';
import cracked from '../assets/cracked.jpg';
import fork from '../assets/fork.png';
import missU from '../assets/missu.png';
import plate from '../assets/plate.png';
import zzz from '../assets/zzz.png';
import standard from '../assets/standard.png';

export default class Character extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterGeudeInfo: {
        hungerLevel: 100,
        sleepLevel: 100,
        playLevel: 100,
        currentImage: cracked
      }
    };
    this.handleFeedLevel = this.handleFeedLevel.bind(this);
    this.handleSleepLevel = this.handleSleepLevel.bind(this);
    this.handlePlayLevel = this.handlePlayLevel.bind(this);
  }

  componentDidMount() {
    this.updateGuedeInfo = setInterval(() =>
      this.updateGuedeStats(),
    2000
    );
    this.updateGuedePic = setInterval(() =>
      this.updateGuedePicture(),
    2000
    );
  }


  componentWillUnmount() {
    clearInterval(this.updateGuedeInfo);
  }

  updateGuedeStats() {
    let decreaseHunger = this.state.masterGeudeInfo.hungerLevel;
    decreaseHunger -= 2;
    let decreaseSleep = this.state.masterGeudeInfo.sleepLevel;
    decreaseSleep -= 1;
    let decreasePlay = this.state.masterGeudeInfo.playLevel;
    decreasePlay -= 3;
    const newMasterGeudeStats = Object.assign({}, this.state.masterGeudeInfo, {hungerLevel: decreaseHunger}, {sleepLevel: decreaseSleep}, {playLevel: decreasePlay});
    this.setState({masterGeudeInfo: newMasterGeudeStats});
  }
  updateGuedePicture() {
    if (this.state.masterGeudeInfo.hungerLevel <= 50) {
      const newPic = fork;
      const newMasterGeudePic = Object.assign({}, this.state.masterGeudeInfo, {currentImage: newPic});
      this.setState({masterGeudeInfo: newMasterGeudePic});
    } else if (this.state.masterGeudeInfo.hungerLevel <= 20) {
      const newPic = bento;
      const newMasterGeudePic = Object.assign({}, this.state.masterGeudeInfo, {currentImage: newPic});
      this.setState({masterGeudeInfo: newMasterGeudePic});
    } else if (this.state.masterGeudeInfo.sleepLevel <= 50) {
      const newPic = baby;
      const newMasterGeudePic = Object.assign({}, this.state.masterGeudeInfo, {currentImage: newPic});
      this.setState({masterGeudeInfo: newMasterGeudePic});
    } else if (this.state.masterGeudeInfo.sleepLevel <= 20) {
      const newPic = zzz;
      const newMasterGeudePic = Object.assign({}, this.state.masterGeudeInfo, {currentImage: newPic});
      this.setState({masterGeudeInfo: newMasterGeudePic});
    } else if (this.state.masterGeudeInfo.playLevel <= 50) {
      const newPic = chopsticks;
      const newMasterGeudePic = Object.assign({}, this.state.masterGeudeInfo, {currentImage: newPic});
      this.setState({masterGeudeInfo: newMasterGeudePic});
    } else if (this.state.masterGeudeInfo.playLevel <= 20) {
      const newPic = missU;
      const newMasterGeudePic = Object.assign({}, this.state.masterGeudeInfo, {currentImage: newPic});
      this.setState({masterGeudeInfo: newMasterGeudePic});
    } else {
      const newPic = standard;
      const newMasterGeudePic = Object.assign({}, this.state.masterGeudeInfo, {currentImage: newPic});
      this.setState({masterGeudeInfo: newMasterGeudePic});
    }

  }
  handleFeedLevel() {
    let newHunger = this.state.masterGeudeInfo.hungerLevel;
    newHunger += 20;
    const newMasterGeudeInfo = Object.assign({}, this.state.masterGeudeInfo, {hungerLevel: newHunger});
    this.setState({masterGeudeInfo: newMasterGeudeInfo});
  }
  handleSleepLevel() {
    let newSleep = this.state.masterGeudeInfo.sleepLevel;
    newSleep += 20;
    const newMasterGeudeInfo = Object.assign({}, this.state.masterGeudeInfo, {sleepLevel: newSleep});
    this.setState({masterGeudeInfo: newMasterGeudeInfo});
  }
  handlePlayLevel() {
    let newPlay = this.state.masterGeudeInfo.playLevel;
    newPlay += 20;
    const newMasterGeudeInfo = Object.assign({}, this.state.masterGeudeInfo, {playLevel: newPlay});
    this.setState({masterGeudeInfo: newMasterGeudeInfo});
  }
  render() {
    return (
      <div>
        <Display guedeInfo={this.state.masterGeudeInfo}/>
        <Buttons onHandleFeed={this.handleFeedLevel} onHandleSleep={this.handleSleepLevel} onHandlePlay={this.handlePlayLevel}/>
      </div>
    );
  }
}




// const GeudeInfo = {
//   hungerLevel: 100,
//   sleepLevel: 100,
//   playLevel: 100
// };
