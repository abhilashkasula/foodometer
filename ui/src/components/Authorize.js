import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import useAuthentication from './hooks/useAuthentication';
import Icon from './Icon';
import Form from './Form';
import {useEffect, useState} from 'react';

const Container = styled.div`
  border: 1px solid #d4dadf;
  width: 460px;
  background: white;
  position: absolute;
  top: 20%;
  border-radius: 4px;
  @media (max-width: 768px) {
    top: ${({isSignup}) => (isSignup ? '10%' : '15%')};
    width: 90%;
  }
`;

const Header = styled.div`
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d4dadf;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const OtherOption = ({className, isLogin}) => (
  <div className={className}>
    <span>{isLogin ? 'New to Foodometer?' : 'Already have an account?'}</span>
    <Link style={{color: 'black'}} to={isLogin ? '/join' : '/login'}>
      {isLogin ? 'Create an account' : 'Sign in'}
    </Link>
  </div>
);

const StyledOtherOption = styled(OtherOption)`
  font-size: 12px;
  font-weight: 600;
  color: #9daab6;
  display: flex;
  justify-content: center;
  padding: 30px 24px;
  & > span {
    margin-right: 4px;
  }
`;

const Error = styled.label`
  color: #ff0537;
  font-weight: 500;
  position: absolute;
  top: 16%;
  background: #ff053733;
  width: 458px;
  text-align: center;
  border-radius: 4px;
  padding: 4px 0;
  border: 1px solid #ff6b7ad6;
`;

const Authorize = ({className, isLogin = false}) => {
  const [isAuthenticated] = useAuthentication();
  const [error, setError] = useState('');

  document.body.style.background = '#f5f7f9';

  useEffect(() => setError(() => ''), [isLogin]);

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div className={className}>
      {error && <Error>{error}</Error>}
      <Container isSignup={!isLogin}>
        <Header>
          <Title>
            {isLogin ? 'Sign in to Foodometer' : 'Create an account'}
          </Title>
          <Icon />
        </Header>
        <Form isLogin={isLogin} handleError={setError} />
        <StyledOtherOption isLogin={isLogin} />
      </Container>
    </div>
  );
};

const StyledAuthorize = styled(Authorize)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledAuthorize;
