import React from 'react';

interface VikProps {
  children?: React.ReactNode;
}

const Vik: React.FC<VikProps> = ({ children = 'VIC' }) => {
  return (
    <span style={{
      color: 'gold', 
      fontWeight: 'bold',
      textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
    }}>
      {children}
    </span>
  );
};

export default Vik;
