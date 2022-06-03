import { useState } from 'react';
import { characterLimit } from '../utils/characterLimit';
import textFormat from '../utils/textFormat';

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
          {active ? 'Mostrar menos' : ' ...mais'}
        </button>
      </span>
      {active && (
        <div className="text-white font-thin flex flex-col gap-4">
          {textFormat(description)}
        </div>
      )}
    </>
  );
};

export default VideoDescription;
