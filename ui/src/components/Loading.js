import styled from 'styled-components';
import loadingImg from './images/loading.gif';

const Loading = ({className}) => (
  <img src={loadingImg} alt="loading" className={className} />
);

const StyledLoading = styled(Loading)`
  position: ${({center}) => center && 'absolute'};
  bottom: ${({center}) => center && '50%'};
  right: ${({center}) => center && '50%'};
  width: ${({center}) => (center ? '80px' : '40px')};
  @media (max-width: 768px) {
    right: ${({center}) => center && '40%'};
  }
`;

export default StyledLoading;
