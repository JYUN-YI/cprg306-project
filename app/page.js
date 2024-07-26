import React from 'react';
import MusicList from './music-list';
import './app.css';

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold m-6 text-center text-pink-400 font-retro flex items-center justify-center">
        <img
          src="/media/photo_peace.gif"
          alt="Rock Music"
          style={{
            width: '50px',  // Set width of the image
            height: 'auto',  // Set height to auto to maintain aspect ratio
            marginRight: '10px'  // Space between the image and the text
          }}
        />
        60s & 70s Rock Music
        <img
          src="/media/photo_weed.gif"
          style={{
            width: '50px',  // Set width of the image
            height: 'auto',  // Set height to auto to maintain aspect ratio
            marginLeft: '10px'  // Space between the text and the image
          }}
        />
      </h1>
      
      <MusicList />
    </main>
  );
}
