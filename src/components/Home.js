import Layout from './Layout';
import Header from './Header';
import useAuthentication from './hooks/useAuthentication';
import Foodometer from './Foodometer';

const Home = () => {
  const isAuthenticated = useAuthentication();
  document.body.style.background = 'white';

  return (
    <Layout isAuthenticated>
      {isAuthenticated ? <Foodometer /> : <Header />}
    </Layout>
  );
};

export default Home;
