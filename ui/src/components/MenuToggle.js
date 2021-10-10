import styled from 'styled-components';
import {StyledList} from './Nav';

const MenuToggle = ({isMenuShown, setMenuShown, className}) => {
  const handleOnClick = () => setMenuShown(toggle => !toggle);

  return (
    <StyledList>
      <li>
        <img
          src={
            isMenuShown
              ? 'https://img.icons8.com/material-rounded/200/000000/delete-sign.png'
              : 'https://img.icons8.com/material-rounded/200/000000/menu--v1.png'
          }
          alt="menu"
          className={className}
          onClick={handleOnClick}
        />
      </li>
    </StyledList>
  );
};

const StyledMenuToggle = styled(MenuToggle)`
  height: 30px;
  padding: 10px 10px 0 0;
`;

export default StyledMenuToggle;
