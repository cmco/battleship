import { styled, Box, css } from '@mui/material';
import { device } from '../../theme';
import { StyledPlayerPoints } from '../../types';

export const StyledPlayerPointsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'playerOne',
})<StyledPlayerPoints>(
  ({ playerOne }) => css`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding: 32px;
    background-color: ${playerOne ? '#ffb500' : '#25bba3'};
    margin-bottom: 16px;

    @media ${device.mobile} {
      margin-bottom: 16px;
      width: 100%;
      padding: 0 16px;
    }

    @media ${device.tablet} {
      width: 100%;
      padding: 0 16px;
    }
  `,
);

export const StyledPoints = styled(Box)`
  font-size: 4rem;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 48px;
  border-bottom: 2px black solid;
  color: #4a4a4a;

  @media ${device.mobile} {
    font-size: 3rem;
    padding-bottom: 0;
  }

  @media ${device.tablet} {
    padding-bottom: 24px;
  }
`;

export const StyledPlayer = styled(Box)`
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #4a4a4a;
  padding-top: 16px;

  @media ${device.mobile} {
    padding-top: 8px;
  }

  @media ${device.tablet} {
    padding: 8px 0;
  }
`;
