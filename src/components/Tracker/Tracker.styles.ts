import { styled, Box } from '@mui/material';
import { device } from '../../theme';

export const StyledTracker = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const StyledContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 16px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }

  @media ${device.tablet} {
    margin-bottom: 16px;
  }
`;

export const StyledImage = styled('img')`
  object-fit: contain;
  width: 100%;
`;

export const StyledMarker = styled('img')`
  object-fit: contain;
  width: 20%;
`;

export const StyledMarkerContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;
