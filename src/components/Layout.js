import NavBar from './NavBar';

const Layout = props => {
  console.log(props);
  return (
    <div>
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
