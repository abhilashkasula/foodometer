import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Api from '../api/api';
import Logo from './Logo';
import Popup from './Popup';

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

const AuthorizeOptions = ({className, isAuthenticated, setAuthentication}) => {
  const [isPopupShown, setPopup] = useState(null);

  const togglePopup = () => setPopup(() => !isPopupShown);

  const logout = () =>
    Api.logout().then(() => togglePopup() || setAuthentication(() => false));

  const handleLogout = e => e.preventDefault() || togglePopup();

  return (
    <li className={className}>
      {isAuthenticated ? (
        <StyledList>
          {isPopupShown && (
            <Popup
              toggle={togglePopup}
              otherOptions={[{name: 'Logout', onClick: logout}]}
              msg={`Are you sure you want to logout?`}
            />
          )}
          <li>
            <OptionLink to="/" onClick={handleLogout}>
              Logout
            </OptionLink>
          </li>
        </StyledList>
      ) : (
        <StyledList>
          <li>
            <OptionLink signup="true" to="/join">
              Sign up
            </OptionLink>
          </li>
          <li>
            <OptionLink to="/login">Sign in</OptionLink>
          </li>
        </StyledList>
      )}
    </li>
  );
};

const StyledAuthorizeOptions = styled(AuthorizeOptions)`
  height: 80px;
  margin: 0;
  display: flex;
  padding: 0;
  position: relative;
  max-width: 250px;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const NavBar = ({className, isAuthenticated, setAuthentication}) => {
  return (
    <div className={className}>
      <StyledList isMob>
        <Logo />
        <Space />
        <StyledAuthorizeOptions
          isAuthenticated={isAuthenticated}
          setAuthentication={setAuthentication}
        />
      </StyledList>
    </div>
  );
};

const StyledNavBar = styled(NavBar)`
  height: 80px;
  margin: 0;
  display: flex;
  padding: 0;
  z-index: 20;
  position: relative;
  box-shadow: 0 3px 8px 0 rgb(116 129 141 / 10%);
  border-bottom: 1px solid #d4dadf;
  background-color: #ffffff;
  justify-content: space-between;
`;

export default StyledNavBar;
