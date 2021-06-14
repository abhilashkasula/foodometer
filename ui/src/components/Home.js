import Layout from './Layout';
import Header from './Header';
import useAuthentication from './hooks/useAuthentication';
import Foodometer from './Foodometer';

const Home = () => {
  const [isAuthenticated, setAuthentication] = useAuthentication();
  document.body.style.background = 'white';

  return (
    <Layout
      isAuthenticated={isAuthenticated}
      setAuthentication={setAuthentication}
    >
      {isAuthenticated ? <Foodometer /> : <Header />}
    </Layout>
  );
};

export default Home;
