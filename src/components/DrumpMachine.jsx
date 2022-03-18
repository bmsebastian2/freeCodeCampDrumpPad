import Display from './Display.jsx';
import BoxBotton from './BoxBotton.jsx';
import { useState } from 'react';
import sty from './styleDM.css';

const DrumpMachine = () => {
  const [nameDisplay, setNamedisplay] = useState('');

  return (
    <div id="drum-machine" className="container1">
      <div className="item-a">
        <h2>
          App by :{' '}
          <strong style={{ color: 'orange' }}>
            ( Sebastian Benitez Mandirola. )
          </strong>
        </h2>
      </div>

      <div className="item-b">
        <BoxBotton setNamedisplay={setNamedisplay} />
      </div>

      <div className="item-c">
        <Display nameDisplay={nameDisplay} />
      </div>
    </div>
  );
};

export default DrumpMachine;
