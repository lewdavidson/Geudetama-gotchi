import React from 'react';
import PropTypes from 'prop-types';

export default function Sleep(props) {
  return(
    <div>
      <button onClick={props.onHandleSleep}>Sleep</button>
    </div>
  );
}

Sleep.propTypes = {
  onHandleSleep: PropTypes.func
};
