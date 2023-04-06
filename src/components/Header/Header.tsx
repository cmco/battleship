import {
  StyledHeaderContainer,
  StyledMainButton,
  StyledSearchButton,
  StyledSearchContainer,
  StyledSearchField,
  StyledSecondaryButton,
} from './Header.styles';

import { IsMobile } from '../../utils';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledMainButton />
      <StyledSearchContainer>
        <StyledSearchField variant='filled' />
        <StyledSearchButton />
      </StyledSearchContainer>
      <StyledSecondaryButton />
      {!IsMobile() && (
        <>
          <StyledSecondaryButton />
          <StyledSecondaryButton />
        </>
      )}
    </StyledHeaderContainer>
  );
};

export default Header;
