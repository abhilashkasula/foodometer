import styled from 'styled-components';

const StyledA = styled.a`
  width: 280px;
  border-right: 1px solid #e6ecf1;
  font-size: 24px;
  color: black;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
`;

const StyledIcon = styled.img`
  width: 39px;
  height: 39px;
`;

const StyledText = styled.div`
  display: block;
  width: 100%;
  height: 30px;
  margin-left: 5px;
`;

const Logo = ({className}) => (
  <li className={className}>
    <StyledA href="/">
      <StyledIcon src="https://img.icons8.com/doodle/48/000000/french-fries.png" />
      <StyledText>Foodometer</StyledText>
    </StyledA>
  </li>
);

const StyledLogo = styled(Logo)`
  width: 100%;
  max-width: 318px;
  margin: 0;
  display: flex;
  padding: 0;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export default StyledLogo;
