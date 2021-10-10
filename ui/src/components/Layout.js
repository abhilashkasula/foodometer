import NavBar from './NavBar';

const Layout = ({
  children,
  isAuthenticated,
  setAuthentication,
  isMenuShown,
  setMenuShown,
}) => {
  return (
    <div>
      <NavBar
        isAuthenticated={isAuthenticated}
        setAuthentication={setAuthentication}
        isMenuShown={isMenuShown}
        setMenuShown={setMenuShown}
      />
      {children}
    </div>
  );
};

export default Layout;
