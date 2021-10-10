import styled from 'styled-components';

const Icon = ({className}) => (
  <img
    className={className}
    src="https://img.icons8.com/doodle/200/000000/french-fries.png"
    alt="icon"
  />
);

const StyledIcon = styled(Icon)`
  width: 39px;
  height: 39px;
`;

export default StyledIcon;
