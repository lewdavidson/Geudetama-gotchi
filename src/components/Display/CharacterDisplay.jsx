import React from 'react';
import PropTypes from 'prop-types';

//deese iz pix//
// import baby from '../../assets/baby.gif';
// import bento from '../../assets/bento.png';
// import chopsticks from '../../assets/chopsticks.png';
// import cracked from '../../assets/cracked.jpg';
// import fork from '../../assets/fork.png';
// import missU from '../../assets/missu.png';
// import plate from '../../assets/plate.png';
// import zzz from '../../assets/zzz.png';

function CharacterDisplay(props) {
  return (
    <div className="image-container">
      <img className="image" src={props.guedeInfo.currentImage} />
      <style jsx>{`
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 1s ease-in-out;
        }
        .image {
          max-width: 100%;
          height: 300px;
          border: 1px solid black;
          border-radius: 15px;

        }
      `}
      </style>
    </div>
  );
}



CharacterDisplay.propTypes = {
  guedeInfo: PropTypes.object
};


export default CharacterDisplay;
