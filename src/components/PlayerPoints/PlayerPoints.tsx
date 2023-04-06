import {
  StyledPlayer,
  StyledPoints,
  StyledPlayerPointsContainer,
} from './PlayerPoints.styles';
import { PlayerPointsProps } from '../../types';

const PlayerPoints = ({ totalHits, playerOne }: PlayerPointsProps) => {
  return (
    <StyledPlayerPointsContainer playerOne={playerOne}>
      <StyledPoints>{totalHits}</StyledPoints>
      <StyledPlayer>{playerOne ? 'Player 1' : 'Player 2'}</StyledPlayer>
    </StyledPlayerPointsContainer>
  );
};

export default PlayerPoints;
