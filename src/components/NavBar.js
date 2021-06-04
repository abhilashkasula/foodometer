import styled from 'styled-components';
import Logo from './Logo';

const StyledList = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0;
  max-width: 1448px;
`;

const NavBar = ({className}) => {
  return (
    <div className={className}>
      <StyledList>
        <Logo />
      </StyledList>
    </div>
  );
};

const StyledNavBar = styled(NavBar)`
  height: 80px;
  margin: 0;
  display: flex;
  padding: 0;
  z-index: 20;
  position: relative;
  box-shadow: 0 3px 8px 0 rgb(116 129 141 / 10%);
  border-bottom: 1px solid #d4dadf;
  background-color: #ffffff;
`;

export default StyledNavBar;
