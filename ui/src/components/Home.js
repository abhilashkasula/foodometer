import Layout from './Layout';
import Header from './Header';
import useAuthentication from './hooks/useAuthentication';
import Container from './Container';
import Loading from './Loading';

const Home = () => {
  const [isAuthenticated, setAuthentication, isLoading] = useAuthentication();

  document.body.style.background = 'white';

  return isLoading ? (
    <Loading center />
  ) : (
    <Layout
      isAuthenticated={isAuthenticated}
      setAuthentication={setAuthentication}
    >
      {isAuthenticated ? <Container /> : <Header />}
    </Layout>
  );
};

export default Home;
