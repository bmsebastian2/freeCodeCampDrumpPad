import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import botones2 from './musica';

const ButtonEdit = ({ setNamedisplay }) => {
  const [letra, setLetra] = useState('r');

  const reproducirMusica = (descripcion, name) => {
    let url = botones2.find((h) => h.descripcion == descripcion);
    let audio = new Audio(url.url);
    audio.play();
    setNamedisplay(name);
  };
  const teclapResionada = (e) => {
    let mus = botones2.find((h) => h.id == e.keyCode);
    let boton = document.getElementById(mus.id);
    boton.click();
  };
  document.addEventListener('keydown', (e) => teclapResionada(e));

  return (
    <>
      {botones2.map((element) => (
        <>
          <Button
            style={{ minWidth: '6rem', color: 'red', margin: '0.5rem' }}
            className="drum-pad"
            variant="outlined"
            id={element.id}
            onClick={() => reproducirMusica(element.descripcion, element.name)}
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
