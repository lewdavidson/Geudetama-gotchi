import React from 'react';
import egg from '../assets/egg.png';

export default function Nav() {
  return (
    <div className='nav-bar'>
      <div className="nav-stuff">
        <img src={egg}></img>
        <h1>Geudetama-gotchi</h1>

        <style jsx>{`
            .nav-stuff {
              display: flex;
              align-items: center;
              color: white;
              letter-spacing: 1px;
            }
            img {
              margin-right: 20px;
            }
            .nav-bar {
              height: 70px;
              background-color: #f9b62f;
              padding: 10px;
              border-radius: 15px;
            }
        `}</style>
      </div>
    </div>
  );
}
