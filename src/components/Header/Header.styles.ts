import { styled, Box, Button, TextField } from '@mui/material';

import { device } from '../../theme';

export const StyledHeaderContainer = styled(Box)`
  padding: 16px;
  background-color: #9999ff;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    margin-bottom: 0;
    height: 32px;
  }

  @media ${device.tablet} {
    margin-bottom: 16px;
    height: 32px;
  }
`;

export const StyledMainButton = styled(Button)`
  background-color: #4c4c4c;
  width: 8%;

  @media ${device.mobile} {
    width: 5%;
  }
`;

export const StyledSearchContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media ${device.mobile} {
    justify-content: baseline;
    width: 50%;
  }
`;

export const StyledSearchField = styled(TextField)`
  background-color: #ffffff;
  width: 90%;

  @media ${device.mobile} {
    .MuiInputBase-input {
      padding-top: 2px;
    }
  }

  @media ${device.tablet} {
    .MuiInputBase-input {
      padding-top: 2px;
    }
  }
`;

export const StyledSearchButton = styled(Button)`
  background-color: #7979bc;
  width: 8%;

  @media ${device.mobile} {
    width: 10%;
    border-radius: 0 4px 4px 0;
  }
`;

export const StyledSecondaryButton = styled(Button)`
  background-color: #4c4c4c;
  width: 4%;

  @media ${device.mobile} {
    width: 5%;
  }
`;
