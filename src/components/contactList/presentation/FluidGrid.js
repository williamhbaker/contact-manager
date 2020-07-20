import React from 'react';

const FluidGrid = (props) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
      gridGap: '4rem',
    }}>
      {props.children}
    </div>
  );
};

export default FluidGrid;