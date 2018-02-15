import React from 'react';
import Feed from './Feed';
import Play from './Play';
import Sleep from './Sleep';
import PropTypes from 'prop-types';

export default function Buttons(props) {
  return (
    <div className='container'>
      <Feed onHandleFeed={props.onHandleFeed}/>
      <Sleep onHandleSleep={props.onHandleSleep}/>
      <Play onHandlePlay={props.onHandlePlay}/>
      <style jsx>{ `
        .container {
          margin-top: 50px;
        }
        .button {
          height: 30px;
          width: 300px;
        }
          `}</style>
    </div>
  );
}

Buttons.propTypes = {
  onHandleFeed: PropTypes.func,
  onHandlePlay: PropTypes.func,
  onHandleSleep: PropTypes.func
};
