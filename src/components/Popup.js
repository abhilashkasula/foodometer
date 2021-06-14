import styled from 'styled-components';

const Content = styled.div`
  background: white;
  padding: 32px 24px;
  border: 1px solid #d4dadf;
  border-radius: 4px;
`;

const Msg = styled.h3`
  margin: 0 0 30px 0;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Cancel = styled.button`
  width: 110px;
  height: 40px;
  background: black;
  color: white;
  font-family: Quattro;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const Option = styled.button`
  width: 110px;
  height: 40px;
  color: red;
  font-family: Quattro;
  background: white;
  border: 1px solid red;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const Popup = ({toggle, msg, className, otherOptions}) => (
  <div className={className}>
    <Content>
      <Msg>{msg}</Msg>
      <Options>
        <span>
          {otherOptions.map(option => (
            <Option key={option.name} onClick={option.onClick}>
              {option.name}
            </Option>
          ))}
        </span>
        <Cancel onClick={toggle}>Cancel</Cancel>
      </Options>
    </Content>
  </div>
);

const StyledPopup = styled(Popup)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export default StyledPopup;
