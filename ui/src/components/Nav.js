import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Space = styled.li`
  flex: 1 1 auto;
  margin: 0px 88px;
  display: block;
  padding: 0;
  overflow: hidden;
  position: relative;
  max-width: 750px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0;
  max-width: 1448px;
  @media (max-width: 768px) {
    justify-content: ${({isMob}) => isMob && 'space-between'};
  }
`;

const OptionLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 30px;
  background: ${({signup}) => (signup === 'true' ? 'black' : 'transparent')};
  color: ${({signup}) => (signup === 'true' ? 'white' : 'black')};
  border-radius: 4px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 18px;
  }
`;

export {Space, StyledList, OptionLink};
