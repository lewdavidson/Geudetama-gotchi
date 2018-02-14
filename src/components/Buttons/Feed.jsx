import React from 'react';
import PropTypes from 'prop-types';

export default function Feed (props) {

  function handleFeed() {
    props.onHandleFeed();
  }

  return(
    <div>
      <button onClick={handleFeed}>Feed</button>
    </div>
  );
}

Feed.propTypes = {
  onHandleFeed: PropTypes.func
};
