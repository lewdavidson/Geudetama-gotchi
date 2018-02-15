import React from 'react';
import PropTypes from 'prop-types';

export default function Play(props) {
  return(
    <div>
      <button onClick={props.onHandlePlay}>Play</button>
    </div>
  );
}

Play.propTypes = {
  onHandlePlay: PropTypes.func
};
