import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { StyledAudioPlayer } from '../Audio/StyledAudioPlayer';
const ReactWaves = dynamic(() => import('@dschoon/react-waves'), { ssr: false });

interface AudioProps {
  audioData: File;
}

function AudioPlayer({ audioData }: AudioProps) {
  const [playing, setPlaying] = useState(false);

  const playPauseHandler = () => {
    setPlaying(!playing);
  };

  return window !== undefined ? (
    <StyledAudioPlayer>
      <div className={'fileDropAreaAudioControl'} onClick={playPauseHandler}>
        {!playing ? (
          <FontAwesomeIcon icon={faPlay} />
        ) : (
          <FontAwesomeIcon icon={faStop} />
        )}
      </div>
      <div className={'fileDropAreaAudioWavesHolder'}>
        <ReactWaves
          audioFile={audioData}
          className={'fileDropAreaAudioWaves'}
          options={{
            barHeight: 1,
            barWidth: 2,
            cursorWidth: 0,
            height: 60,
            maxCanvasWidth: 160,
            hideScrollbar: true,
            progressColor: '#57A5F8',
            responsive: true,
            waveColor: '#FFFFFF',
          }}
          volume={1}
          zoom={1}
          playing={playing}
        />
      </div>
    </StyledAudioPlayer>
  ) : null;
}

export default AudioPlayer;
