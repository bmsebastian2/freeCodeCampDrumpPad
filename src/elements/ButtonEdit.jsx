import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { reproMusic, buscarUrl, track } from './musica';

const ButtonEdit = ({ setNamedisplay }) => {
  const [letra, setLetra] = useState('r');

  document.addEventListener('keydown', (e) => teclapResionada(e));

  return (
    <>
      {track.map((element) => (
        <>
          <Button
            style={{ minWidth: '6rem', color: 'red', margin: '0.5rem' }}
            className="drum-pad"
            variant="outlined"
            id={element.id}
            onClick={(e) => reproMusic(buscarUrl(e.target.id))}
          >
            {element.descripcion}
            <audio
              src={element.url}
              className="clip"
              id={element.descripcion}
            ></audio>
          </Button>
        </>
      ))}
    </>
  );
};

export default ButtonEdit;
