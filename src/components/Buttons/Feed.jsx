import React from 'react';
import PropTypes from 'prop-types';

export default function Feed (props) {


  return(
    <div>
      <button onClick={props.onHandleFeed}>Feed</button>
    </div>
  );
}

Feed.propTypes = {
  onHandleFeed: PropTypes.func
};
