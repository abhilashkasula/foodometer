import styled from 'styled-components';
import SelectFoodmoji from './SelectFoodmoji';

const Menu = ({className, foodmojis}) => {
  return (
    <div className={className}>
      <SelectFoodmoji foodmojis={foodmojis} />
    </div>
  );
};

const StyledMenu = styled(Menu)`
  width: 280px;
  background: #f4f5f7;
  padding: 20px;
`;

export default StyledMenu;
