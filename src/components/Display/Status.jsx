import React from 'react';
import PropTypes from 'prop-types';

export default function Status(props) {
  return (
    <div>
      <h1>Hunger: {props.geudeInfo.hungerLevel}</h1>
      <h1>Tiredness: {props.geudeInfo.sleepLevel}</h1>
      <h1>Attention: {props.geudeInfo.playLevel}</h1>
    </div>
  );
}

Status.propTypes = {
  geudeInfo: PropTypes.object
};
