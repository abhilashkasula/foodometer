import {useState} from 'react';
import styled from 'styled-components';
import Foodometer from './Foodometer';
import Menu from './Menu';

const isMobileView = width => width <= 768;

const Container = ({className}) => {
  const [isTeamLoaded, setTeamLoaded] = useState(false);
  const [foodmojis, setFoodmojis] = useState(null);

  return (
    <div className={className}>
      <Foodometer setTeamLoaded={setTeamLoaded} setFoodmojis={setFoodmojis} />
      {isTeamLoaded && !isMobileView(window.innerWidth) && (
        <Menu foodmojis={foodmojis} />
      )}
    </div>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  height: ${() => window.innerHeight - 85 + 'px'};
`;

export default StyledContainer;
