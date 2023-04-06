import { styled, Box } from '@mui/material';
import { device } from '../../theme';

export const StyledPlayAreaContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 48px;
  max-width: 1440px;
  margin: auto;

  @media ${device.mobile} {
    flex-direction: column-reverse;
  }

  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
`;

export const StyledGameInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media ${device.mobile} {
    width: 100%;
  }

  @media ${device.tablet} {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

export const StyledPlayerPointsContainer = styled(Box)`
  display: flex;
  flex-direction: row;

  @media ${device.tablet} {
    width: 35%;
  }
`;

export const StyledTrackerContainer = styled(Box)`
  @media ${device.mobile} {
    column-count: 2;
  }

  @media ${device.tablet} {
    column-count: 2;
    width: 60%;
  }
`;

export const StyledGridContainer = styled(Box)`
  width: 54%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  box-sizing: border-box;
  border: 1rem #ffb500 solid;
  padding: 0;

  @media ${device.mobile} {
    box-sizing: border-box;
    border: 6px #ffb500 solid;
    width: 100%;
  }

  @media ${device.tablet} {
    box-sizing: border-box;
    border: 6px #ffb500 solid;
    width: 100%;
    margin-bottom: 16px;
  }
`;
