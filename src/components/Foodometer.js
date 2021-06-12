import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Api from '../api/api';
import Person from './Person';
import Add from './Add';

const Team = ({className}) => {
  const [meter, setMeter] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    Api.getMeter().then(({people, foodmoji, rupees}) => {
      console.log(people, foodmoji, rupees);
      setMeter(() => people);
      setDetails(() => ({foodmoji, rupees}));
    });
  }, []);

  const handleNewPerson = person => setMeter(meter => [person, ...meter]);

  return meter && details ? (
    <div className={className}>
      <Add handleNewPerson={handleNewPerson} />
      {meter.map(person => (
        <Person
          person={person}
          key={person.id}
          foodmoji={details.foodmoji}
          rupees={details.rupees}
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
