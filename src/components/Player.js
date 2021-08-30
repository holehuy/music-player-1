import React, { useState, useEffect, useRef } from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSkip, setIsSkip] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying, isSkip]);

  const skipSong = (forward) => {
    if (forward) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        setIsSkip(!isSkip);
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        setIsSkip(!isSkip);
        return temp;
      });
    }
  };
  return (
    <div className='c-player'>
      <audio
        ref={audioEl}
        src={props.songs[props.currentSongIndex].src}
      ></audio>
      <h4>Playing now</h4>

      <PlayerDetails song={props.songs[props.currentSongIndex]} />

      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <p>
        <strong>Next up:</strong> {props.songs[props.nextSongIndex].title}
      </p>
    </div>
  );
}

export default Player;
