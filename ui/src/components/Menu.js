import styled, {keyframes} from 'styled-components';
import SelectFoodmoji from './SelectFoodmoji';
import Logout from './Logout';

const LogoutButton = styled.span`
  border: 1px solid;
  align-self: center;
  padding: 5px 0;
  border-radius: 4px;
`;

const Menu = ({className, foodmojis, changeFoodmoji, setAuthentication}) => {
  return (
    <div className={className}>
      <SelectFoodmoji foodmojis={foodmojis} changeFoodmoji={changeFoodmoji} />
      <LogoutButton>
        <Logout setAuthentication={setAuthentication} />
      </LogoutButton>
    </div>
  );
};

const slide = keyframes`
  from {
    transform: translateX(100%);
  }
  
  to {
    transform: translateX(0%);
  }
`;

const StyledMenu = styled(Menu)`
  width: ${({isMobileView}) => (isMobileView ? '100%' : '280px')};
  background: #f4f5f7;
  padding: 20px;
  animation: ${slide} 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default StyledMenu;
