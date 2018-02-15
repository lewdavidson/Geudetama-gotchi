import React from 'react';
import PropTypes from 'prop-types';

export default function Status(props) {
  return (
    <div className='container'>
      <div>
        <h1>Hungry:</h1>
        <progress value={props.geudeInfo.hungerLevel} max="100"></progress>
      </div>
      <div>
        <h1>Tired:</h1>
        <progress value={props.geudeInfo.sleepLevel} max="100"></progress>
      </div>
      <div>
        <h1>Bored:</h1>
        <progress value={props.geudeInfo.playLevel} max="100"></progress>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 50px;
          font-size: 1em;
          text-decoration: underline;
          text-align: center;
        }

      `}</style>
    </div>
  );
}

Status.propTypes = {
  geudeInfo: PropTypes.object
};
