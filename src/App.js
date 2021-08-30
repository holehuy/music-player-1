import { useState, useEffect } from 'react';
import Player from './components/Player';
function App() {
  const [songs, setSongs] = useState([
    {
      title: 'At My Worst',
      artist: '',
      img_src: './images/song-1.jpg',
      src: './music/AtMyWorst-PinkSweat.mp3',
    },
    {
      title: 'Phải chăng em đã yêu',
      artist: '',
      img_src: './images/song-2.jpg',
      src: './music/PhaiChangEmDaYeu.mp3',
    },
    {
      title: 'Có em đời bỗng vui',
      artist: '',
      img_src: './images/song-3.jpg',
      src: './music/CoEmDoiBongVui-Chillies.mp3',
    },
    {
      title: 'SG đau lòng quá',
      artist: '',
      img_src: './images/song-4.jpg',
      src: './music/SaiGonDauLongQua.mp3',
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex]);
  return (
    <div className='App'>
      <Player
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
      />
    </div>
  );
}

export default App;
