import styled from 'styled-components';

const Foodmoji = styled.span`
  border: 1px solid #d4dadf;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  border-radius: 30px 30px;
  font-size: 18px;
  font-weight: 600;
  color: #31363a;
  margin: 0 10px;
`;

const Emoji = styled.img`
  width: 29px;
  margin-right: 4px;
`;

const Option = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Meter = ({foodmoji, count, className, increment, decrement}) => (
  <div className={className}>
    <Option
      src="https://img.icons8.com/ios-glyphs/100/000000/minus-math.png"
      alt="remove"
      onClick={decrement}
    />
    <Foodmoji>
      <Emoji src={foodmoji} alt="foodmoji" />
      <span>{count}</span>
    </Foodmoji>
    <Option
      src="https://img.icons8.com/metro/26/000000/plus-math.png"
      alt="add"
      onClick={increment}
    />
  </div>
);

const StyledMeter = styled(Meter)`
  display: flex;
  align-items: center;
  margin: 50px 0;
`;

export default StyledMeter;
