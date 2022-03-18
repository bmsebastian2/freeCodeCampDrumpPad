const Display = ({ nameDisplay }) => {
  return (
    <div
      id="display"
      style={{
        boxShadow: '46px -2px 27px -41px rgba(0,0,0,0.37)',
        color: 'black',
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h3>{nameDisplay}</h3>
    </div>
  );
};

export default Display;
