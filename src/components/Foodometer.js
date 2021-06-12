import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Api from '../api/api';
import Person from './Person';
import Add from './Add';

const Team = ({className}) => {
  const [people, setPeople] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    Api.getDetails().then(({people, foodmoji, rupees}) => {
      setPeople(() => people);
      setDetails(() => ({foodmoji, rupees}));
    });
  }, []);

  const handleNewPerson = person => setPeople(people => [person, ...people]);
  const handleDelete = personId =>
    setPeople(people => people.filter(id => id !== personId));

  return people && details ? (
    <div className={className}>
      <Add handleNewPerson={handleNewPerson} />
      {people.map(id => (
        <Person
          key={id}
          foodmoji={details.foodmoji}
          rupees={details.rupees}
          id={id}
          handleDelete={handleDelete}
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
