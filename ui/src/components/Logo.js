import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Icon from './Icon';

const StyledLink = styled(Link)`
  width: 280px;
  border-right: 1px solid #e6ecf1;
  font-size: 24px;
  color: black;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    width: 50px;
  }
`;

const StyledText = styled.div`
  display: block;
  width: 100%;
  height: 30px;
  margin-left: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = ({className}) => (
  <li className={className}>
    <StyledLink to="/">
      <Icon />
      <StyledText>Foodometer</StyledText>
    </StyledLink>
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
  @media (max-width: 768px) {
    justify-content: start;
    padding: 18px;
    max-width: 50px;
  }
`;

export default StyledLogo;
