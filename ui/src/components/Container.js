import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Api from '../api/api';
import Foodometer from './Foodometer';
import Menu from './Menu';

const isMobileView = width => width <= 768;

const Container = ({className}) => {
  const [isTeamLoaded, setTeamLoaded] = useState(false);
  const [foodmojis, setFoodmojis] = useState(null);
  const [foodmoji, setFoodmoji] = useState(null);

  useEffect(() => {
    Api.getFoodmojis().then(foodmojis => {
      const foodmoji = foodmojis.find(moji => moji.isSelected);
      setFoodmojis(() => foodmojis);
      setFoodmoji(() => foodmoji);
    });
  }, []);

  const changeFoodmoji = id => {
    setFoodmojis(foodmojis => {
      return foodmojis.map(moji => {
        moji.isSelected = false;

        if (moji.id === id) {
          moji.isSelected = true;
          setFoodmoji(() => moji);
        }

        return moji;
      });
    });
  };

  return (
    <div className={className}>
      <Foodometer setTeamLoaded={setTeamLoaded} foodmoji={foodmoji} />
      {isTeamLoaded && foodmojis && !isMobileView(window.innerWidth) && (
        <Menu foodmojis={foodmojis} changeFoodmoji={changeFoodmoji} />
      )}
    </div>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  height: ${() => window.innerHeight - 85 + 'px'};
`;

export default StyledContainer;
