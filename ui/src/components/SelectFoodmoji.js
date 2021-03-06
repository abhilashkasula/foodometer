import styled from 'styled-components';
import Api from '../api/api';
import useHover from './hooks/useHover';

const Foodmoji = ({
  id,
  foodmoji,
  title,
  value,
  className,
  changeFoodmoji: updateFoodmoji,
}) => {
  const [ref, isHovered] = useHover();

  const changeFoodmoji = () =>
    Api.changeFoodmoji(id).then(() => updateFoodmoji(id));

  return (
    <img
      src={foodmoji}
      className={className}
      ref={ref}
      title={`${title}: ₹${value}`}
      style={{background: isHovered && '#efeeee'}}
      onClick={changeFoodmoji}
      alt={title}
    />
  );
};

const StyledFoodmoji = styled(Foodmoji)`
  border-radius: 4px;
  padding: 5px;
  height: 30px;
  border: ${({isSelected}) => isSelected && '1px solid'};
  margin: 0 1.5px;
  cursor: pointer;
`;

const Foodmojis = ({className, foodmojis, changeFoodmoji}) => {
  return (
    <div className={className}>
      {foodmojis &&
        foodmojis.map(({id, foodmoji, title, value, isSelected}) => (
          <StyledFoodmoji
            id={id}
            foodmoji={foodmoji}
            isSelected={isSelected}
            title={title}
            value={value}
            key={id}
            changeFoodmoji={changeFoodmoji}
          />
        ))}
    </div>
  );
};

const StyledFoodmojis = styled(Foodmojis)`
  margin: 15px 0 5px 0;
  display: flex;
  justify-content: center;
`;

const Title = styled.h5`
  margin: 5px 0;
  text-align: center;
`;

const SelectFoodmoji = ({className, foodmojis, changeFoodmoji}) => {
  return (
    <div className={className}>
      <Title>Select your foodmoji</Title>
      <StyledFoodmojis foodmojis={foodmojis} changeFoodmoji={changeFoodmoji} />
    </div>
  );
};

const StyledSelectFoodmoji = styled(SelectFoodmoji)`
  background: white;
  border-radius: 5px;
  padding: 10px;
`;

export default StyledSelectFoodmoji;
