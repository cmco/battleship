import { useEffect, useState } from 'react';

import Cell from '../Cell/Cell';
import Tracker from './../Tracker/Tracker';
import PlayerPoints from '../PlayerPoints/PlayerPoints';

import {
  StyledGameInfoContainer,
  StyledGridContainer,
  StyledPlayAreaContainer,
  StyledPlayerPointsContainer,
  StyledTrackerContainer,
} from './PlayArea.styles';

import { ShipsState } from '../../types';
import { data } from '../../utils/apiData';

const PlayArea = () => {
  const [totalHits, setTotalHits] = useState<number>(0);
  const [shipsState, setShipsState] = useState<ShipsState>({});

  useEffect(() => {
    let size = 0;
    let id = '';
    let newShipsState: ShipsState = {};
    data.layout.map((item, index) => {
      id = 'ship' + index;
      size = data.shipTypes[item.ship].size;

      newShipsState[id] = {
        ship: item.ship,
        count: 0,
        size: size,
      };

      return null;
    });

    setShipsState(newShipsState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let gridItemArray: JSX.Element[] = [];

  for (let index = 0; index < 100; index++) {
    gridItemArray.push(<Cell hasShip={false} />);
  }

  data.layout.map((item, mapIndex) => {
    for (let index = 0; index < item.positions.length; index++) {
      gridItemArray[item.positions[index][0] + item.positions[index][1] * 10] =
        (
          <Cell
            hasShip={true}
            id={'ship' + mapIndex}
            setShipsState={setShipsState}
            setTotalHits={setTotalHits}
          />
        );
    }

    return null;
  });

  return (
    <StyledPlayAreaContainer>
      <StyledGameInfoContainer>
        <StyledPlayerPointsContainer>
          <PlayerPoints playerOne totalHits={totalHits} />
          <PlayerPoints totalHits={0} />
        </StyledPlayerPointsContainer>
        <StyledTrackerContainer>
          {Object.keys(shipsState).map((ship) => (
            <Tracker
              ship={shipsState[ship].ship}
              size={shipsState[ship].size}
              count={shipsState[ship].count}
            />
          ))}
        </StyledTrackerContainer>
      </StyledGameInfoContainer>
      <StyledGridContainer>
        {gridItemArray.map((cell) => cell)}
      </StyledGridContainer>
    </StyledPlayAreaContainer>
  );
};

export default PlayArea;
