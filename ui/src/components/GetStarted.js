import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const GettingStartedContainer = styled.div`
  max-width: 1100px;
  margin: 30px auto 0;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const GetStarted = ({className, nodeRef}) => {
  const history = useHistory();
  const handleClick = () => history.push('/login');

  return (
    <GettingStartedContainer>
      <button className={className} ref={nodeRef} onClick={handleClick}>
        Get Started
      </button>
    </GettingStartedContainer>
  );
};

const StyledGetStarted = styled(GetStarted)`
  cursor: pointer;
  padding: 20px 50px;
  font-size: 20px;
  color: white;
  box-shadow: ${({isHovered}) => isHovered && '3px 1px 7px 0px #ccc'};
  background-color: ${({isHovered}) => (isHovered ? 'black' : '#191919')};
  border-radius: 7px;
  border: 1px solid transparent;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 18px 50px;
  }
`;

export default StyledGetStarted;
