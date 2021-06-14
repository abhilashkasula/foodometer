import NavBar from './NavBar';

const Layout = ({children, isAuthenticated, setAuthentication}) => {
  return (
    <div>
      <NavBar
        isAuthenticated={isAuthenticated}
        setAuthentication={setAuthentication}
      />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
