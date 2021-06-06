import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Api from '../api/api';
import useHover from './hooks/useHover';

const Name = styled.h2`
  margin: 0;
`;

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

const Meter = ({foodmoji, count, className}) => (
  <div className={className}>
    <Option
      src="https://img.icons8.com/ios-glyphs/100/000000/minus-math.png"
      alt="remove"
    />
    <Foodmoji>
      <Emoji src={foodmoji} alt="foodmoji" />
      <span>{count}</span>
    </Foodmoji>
    <Option
      src="https://img.icons8.com/metro/26/000000/plus-math.png"
      alt="add"
    />
  </div>
);

const StyledMeter = styled(Meter)`
  display: flex;
  align-items: center;
  margin: 50px 0;
`;

const Rupees = styled.div`
  font-weight: 600;
`;

const Person = ({className, foodmoji, rupees, person: {name, count}}) => {
  const [ref, isHovered] = useHover();

  return (
    <div
      className={className}
      style={isHovered ? {boxShadow: '0px 0px 7px #d4dadf'} : {}}
      ref={ref}
    >
      <Name>{name}</Name>
      <StyledMeter foodmoji={foodmoji} count={count} />
      <Rupees>&#8377; {rupees * count}</Rupees>
    </div>
  );
};

const StyledPerson = styled(Person)`
  border: 1px solid #d4dadf;
  border-radius: 4px;
  padding: 32px 24px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 16px;
  }
`;

const Team = ({className}) => {
  const [meter, setMeter] = useState(null);

  useEffect(() => {
    Api.getMeter().then(meter => setMeter(() => meter));
  }, []);

  return meter ? (
    <div className={className}>
      {meter.people.map(person => (
        <StyledPerson
          person={person}
          key={person.id}
          foodmoji={meter.foodmoji}
          rupees={meter.rupeesPerOne}
        />
      ))}
    </div>
  ) : (
    <div className={className}>Loading</div>
  );
};

const StyledTeam = styled(Team)`
  display: flex;
  flex-wrap: wrap;
`;

const Foodometer = ({className}) => {
  document.body.style.background = 'white';

  return (
    <div className={className}>
      <StyledTeam />
    </div>
  );
};

const StyledFoodometer = styled(Foodometer)`
  padding: 62px 92px;
  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`;

export default StyledFoodometer;
