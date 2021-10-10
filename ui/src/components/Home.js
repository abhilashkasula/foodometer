import Layout from './Layout';
import Header from './Header';
import useAuthentication from './hooks/useAuthentication';
import Container from './Container';
import Loading from './Loading';
import {useState} from 'react';

const Home = () => {
  const [isAuthenticated, setAuthentication, isLoading] = useAuthentication();
  const [isMenuShown, setMenuShown] = useState(false);

  document.body.style.background = 'white';

  return isLoading ? (
    <Loading center />
  ) : (
    <Layout
      isAuthenticated={isAuthenticated}
      setAuthentication={setAuthentication}
      isMenuShown={isMenuShown}
      setMenuShown={setMenuShown}
    >
      {isAuthenticated ? (
        <Container
          isMenuShown={isMenuShown}
          setAuthentication={setAuthentication}
        />
      ) : (
        <Header />
      )}
    </Layout>
  );
};

export default Home;
