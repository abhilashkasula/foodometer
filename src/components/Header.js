import styled from 'styled-components';
import GetStarted from './GetStarted';
import useHover from './hooks/useHover';

const StyledH1 = styled.h1`
  max-width: 1100px;
  margin: 15px auto;
  font-size: 65px;
  line-height: 100px;
  @media (max-width: 768px) {
    font-size: 23px;
    line-height: 45px;
    text-align: center;
  }
`;

const StyledH2 = styled.h2`
  margin: 20px auto;
  max-width: 1100px;
  color: grey;
  @media (max-width: 768px) {
    margin: 8px auto;
    font-size: 14px;
    text-align: center;
  }
`;

const Header = ({className}) => {
  const [ref, isHovered] = useHover();

  return (
    <div className={className}>
      <StyledH2>Time is always precious</StyledH2>
      <StyledH1>A fun way to make your team attend a meeting on time</StyledH1>
      <GetStarted nodeRef={ref} isHovered={isHovered} />
    </div>
  );
};

const StyledHeader = styled(Header)`
  margin-top: 200px;
  @media (max-width: 768px) {
    margin-top: 150px;
  }
`;

export default StyledHeader;
