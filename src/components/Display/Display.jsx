import React from 'react';
import CharacterDisplay from './CharacterDisplay';
import Status from './Status';
import PropTypes from 'prop-types';

export default function Display(props) {
  return (
    <div>
      <Status geudeInfo={props.guedeInfo}/>
      <CharacterDisplay guedeInfo={props.guedeInfo}/>
    </div>
  );
}
Display.propTypes = {
  guedeInfo: PropTypes.object
};
