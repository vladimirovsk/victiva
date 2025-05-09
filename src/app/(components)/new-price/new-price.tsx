import { FC } from 'react';
import redX from '../../../../public/red-x.svg'

interface NewPriceProps {
    oldParam: { value: number, color: string };
    newParam: { value: number, color: string };
}

const NewPrice: FC<NewPriceProps> = ({ oldParam, newParam }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: '0',
      padding: '0'
    }}>
      <div style={{
        position: 'relative',
        color: oldParam.color,
        marginRight: '10px'
      }}>
        ${oldParam.value} -
        <img
          src={redX.src}
          alt="crossed out"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      <div style={{ color: 'red' }}>${newParam.value}</div>
    </div>
  );
};

export default NewPrice;
