import { useState } from 'react';
import { characterLimit } from '../utils/characterLimit';

const VideoDescription = function ({ description }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <span>
        {!active && (
          <span className="text-gray-100 font-thin">
            {characterLimit(description, 100)}
          </span>
        )}
        <button
          className={active ? 'absolute -bottom-8 left-0' : ''}
          onClick={() => setActive(!active)}
        >
          {active ? 'menos...' : ' mais...'}
        </button>
      </span>
      {active && <p className="text-white font-thin">{description}</p>}
    </>
  );
};

export default VideoDescription;
