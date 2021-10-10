import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Api from '../api/api';
import Foodometer from './Foodometer';
import Menu from './Menu';
import useMobileView from './hooks/useMobileView';

const Container = ({className, isMenuShown, setAuthentication}) => {
  const [isTeamLoaded, setTeamLoaded] = useState(false);
  const [foodmojis, setFoodmojis] = useState(null);
  const [foodmoji, setFoodmoji] = useState(null);
  const [isMobileView, windowSize] = useMobileView();

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
    <div className={className} style={{height: `${windowSize.height - 85}px`}}>
      <Foodometer
        setTeamLoaded={setTeamLoaded}
        foodmoji={foodmoji}
        isMenuShown={isMenuShown}
      />
      {isTeamLoaded &&
        foodmojis &&
        (!isMobileView || (isMobileView && isMenuShown)) && (
          <Menu
            foodmojis={foodmojis}
            changeFoodmoji={changeFoodmoji}
            isMobileView={isMobileView}
            setAuthentication={setAuthentication}
          />
        )}
    </div>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
`;

export default StyledContainer;
