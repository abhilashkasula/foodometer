import styled from 'styled-components';
import useMobileView from './hooks/useMobileView';
import Logo from './Logo';
import Logout from './Logout';
import {Space, StyledList, OptionLink} from './Nav';
import MenuToggle from './MenuToggle';

const AuthorizeOptions = ({
  className,
  isAuthenticated,
  setAuthentication,
  isMenuShown,
  setMenuShown,
}) => {
  const [isMobileView] = useMobileView();

  return (
    <li className={className}>
      {isAuthenticated ? (
        isMobileView ? (
          <MenuToggle isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
        ) : (
          <Logout setAuthentication={setAuthentication} />
        )
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

const NavBar = ({
  className,
  isAuthenticated,
  setAuthentication,
  isMenuShown,
  setMenuShown,
}) => {
  return (
    <div className={className}>
      <StyledList isMob>
        <Logo />
        <Space />
        <StyledAuthorizeOptions
          isAuthenticated={isAuthenticated}
          setAuthentication={setAuthentication}
          isMenuShown={isMenuShown}
          setMenuShown={setMenuShown}
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
