import React from 'react';
import MusicList from './music-list';
import './app.css';

export default function Page() {
  // Define the number of photo_weed images you want
  const weedImages = Array(24).fill('/media/photo_weed.gif'); // Adjust the number of images as needed

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
        />60s & 70s Rock Music
        <img
          src="/media/photo_peace.gif"
          alt="Rock Music"
          style={{
            width: '50px',  // Set width of the image
            height: 'auto',  // Set height to auto to maintain aspect ratio
            marginLeft: '10px'  // Space between the image and the text
          }}
        />
      </h1>

      

      <MusicList />


      <div className="image-row flex justify-center mt-4">
        {weedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Weed ${index}`}
            style={{
              width: '50px',  // Set width of the image
              height: 'auto',  // Set height to auto to maintain aspect ratio
              marginLeft: '5px',  // Space between each weed image
              marginRight: '5px'  // Optional: Space between each weed image
            }}
          />
        ))}
        <label className="justify-center mt-4"> © 2024 | vercel.com </label>
        
      </div>


    </main>
  );
}
