import { useState } from 'react';

import { StyledCell, StyledMarker } from './Cell.styles';
import HitLarge from '../../assets/Hit.png';
import MissLarge from '../../assets/Miss.png';
import { CellProps } from '../../types';

const Cell = ({ id, hasShip, setShipsState, setTotalHits }: CellProps) => {
  const [isMarked, setIsMarked] = useState<boolean>(false);

  const handleMark = () => {
    if (id && setShipsState && setTotalHits && !isMarked) {
      // setShipState((shipState: number) => shipState + 1);
      setShipsState((prevState) => {
        return {
          ...prevState,
          [id]: {
            ...prevState[id],
            count: prevState[id].count + 1,
          },
        };
      });

      setTotalHits((totalHits: number) => totalHits + 1);
    }
    setIsMarked(true);
  };

  return (
    <StyledCell isMarked={isMarked} onClick={handleMark}>
      {isMarked ? (
        hasShip ? (
          <StyledMarker src={HitLarge} alt='Hit Large' />
        ) : (
          <StyledMarker src={MissLarge} alt='Miss Large' />
        )
      ) : (
        ''
      )}
    </StyledCell>
  );
};

export default Cell;
