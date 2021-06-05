import NavBar from './NavBar';

const Layout = ({children}) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
