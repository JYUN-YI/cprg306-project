"use client";

import { useState } from "react";
import MusicBlock from "./music-block";
import musicData from "./music.json"; // Correct import name

export default function MusicList() {
  // State to handle the selected band filter
  const [bandFilter, setBandFilter] = useState("All");

  // Extract unique bands and sort them
  const bands = [...new Set(musicData.map((music) => music.band))].sort();

  // Filter music by selected band
  const filteredMusic = bandFilter === "All" 
    ? musicData 
    : musicData.filter((music) => music.band === bandFilter);

  // Sort filtered music by release year in descending order
  const sortedMusic = filteredMusic.sort((a, b) => b.date - a.date);

  return (
    <>
      <div className="text-center mb-4">
        <label htmlFor="band" className="mr-2">Filter by singer/band:</label>
        <select
          id="band"
          value={bandFilter}
          onChange={(e) => setBandFilter(e.target.value)}
          className="bg-green-950 text-white p-2 font-sans"
        >
          <option value="All">All</option>
          {bands.map((band) => (
            <option value={band} key={band}>
              {band}
            </option>
          ))}
        </select>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {sortedMusic.length === 0 ? (
          <p className="text-center">No music found.</p>
        ) : (
          sortedMusic.map((music) => (
            <MusicBlock music={music} key={music.id} />
          ))
        )}
      </div>
      
        
    </>
  );
}
