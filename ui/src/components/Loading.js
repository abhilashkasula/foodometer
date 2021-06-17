import styled from 'styled-components';
import loadingImg from './images/loading.gif';

const Loading = ({className}) => (
  <img src={loadingImg} alt="loading" className={className} />
);

const StyledLoading = styled(Loading)`
  position: ${({center, login}) => (center || login) && 'absolute'};
  bottom: ${({center, login}) => (center && '50%') || (login && '110px')};
  right: ${({center, login}) => (center && '50%') || (login && '45%')};
  width: ${({center}) => (center ? '80px' : '40px')};
  @media (max-width: 768px) {
    right: ${({center}) => center && '40%'};
  }
`;

export default StyledLoading;
