import React, { useRef, useState } from 'react';

export default function MusicBlock({ music }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

    return (
      <div className="cursor-pointer bg-yellow-200 m-4 p-2 flex flex-col items-center">
        {music.photo && (
        <img
          src={music.photo}
          style={{
            width: music.photoWidth || '200px',  // Apply photo width from JSON
            height: music.photoHeight || 'auto'  // Apply photo height from JSON
          }}
          className="mt-2"
        />
      )}
        <h3 className="text-xl font-bold text-center mt-2 text-black">{music.name}</h3>
        <p className="text-center mt-1 text-black">{music.band}</p>
        <p className="text-center mt-1 text-black">Released Year: {music.date}</p>
        {music.audio && (
        <audio
          controls
          ref={audioRef}
          className="mt-2"
        >
          <source src={music.audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
      </div>
    );
  }