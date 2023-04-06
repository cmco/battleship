import { styled, css, Box } from '@mui/material';
import { StyledCellProps } from '../../types';

export const StyledCell = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMarked',
})<StyledCellProps>(
  ({ isMarked }) => css`
    cursor: pointer;
    border: 1px solid black;
    padding: 0;
    aspect-ratio: 1/1;
    flex-grow: 1;
    border: ${isMarked ? '1px solid none' : '1px solid black'};
    position: relative;
    background-color: #ffffff;
  `,
);

export const StyledMarker = styled('img')`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  display: block;
  object-fit: contain;
  overflow: hidden;
`;
