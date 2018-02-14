import React from 'react';
import Feed from './Feed';
import Play from './Play';
import Sleep from './Sleep';
import PropTypes from 'prop-types';

export default function Buttons(props) {
  return (
    <div>
      <Feed onHandleFeed={props.onHandleFeed}/>
      <Play />
      <Sleep />
    </div>
  );
}

Buttons.propTypes = {
  onHandleFeed: PropTypes.func
};
