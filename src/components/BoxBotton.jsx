import ButtonEdit from '../elements/ButtonEdit.jsx';
const BoxBotton = ({ setNamedisplay }) => {
  return (
    <div
      style={{
        boxShadow: '-26px -1px 42px -26px rgba(0,0,0,0.37)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
      }}
    >
      <ButtonEdit setNamedisplay={setNamedisplay} />
    </div>
  );
};

export default BoxBotton;
