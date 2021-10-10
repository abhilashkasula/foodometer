import NavBar from './NavBar';

const Layout = ({children, isAuthenticated, setAuthentication}) => {
  return (
    <div>
      <NavBar
        isAuthenticated={isAuthenticated}
        setAuthentication={setAuthentication}
      />
      {children}
    </div>
  );
};

export default Layout;
