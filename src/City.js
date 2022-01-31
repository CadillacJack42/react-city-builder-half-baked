import React from 'react';

export default function City({ skylineId, waterfrontId, castleId }) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
      <img className='city' src={`skyline-${skylineId}.jpeg`}></img>
      <img className='city' src={`waterfront-${waterfrontId}.jpeg`}></img>
      <img className='city' src={`castle-${castleId}.jpeg`}></img>
    </div>
  );
}
