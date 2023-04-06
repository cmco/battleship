import {
  StyledImage,
  StyledMarker,
  StyledMarkerContainer,
  StyledContainer,
} from './Tracker.styles';

import HitSmall from '../../assets/HitSmall.png';
import MissSmall from '../../assets/MissSmall.png';

import { TrackerProps } from '../../types';

const Tracker = ({ ship, size, count }: TrackerProps) => {
  let hitMarkers = [];
  let missMarkers = [];

  for (let index = 0; index < count; index++) {
    hitMarkers.push(<StyledMarker src={HitSmall} alt='Hit Marker' />);
  }

  for (let index = 0; index < size - count; index++) {
    missMarkers.push(<StyledMarker src={MissSmall} alt='Miss Marker' />);
  }

  return (
    <StyledContainer>
      <StyledImage src={require(`../../assets/${ship}.png`)} alt={ship} />
      <StyledMarkerContainer>
        {hitMarkers.map((hit) => hit)}
        {missMarkers.map((miss) => miss)}
      </StyledMarkerContainer>
    </StyledContainer>
  );
};

export default Tracker;
