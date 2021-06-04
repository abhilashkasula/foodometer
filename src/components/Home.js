import Layout from './Layout';
import Header from './Header';

const Home = () => {
  document.body.style.background = 'white';
  
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default Home;
