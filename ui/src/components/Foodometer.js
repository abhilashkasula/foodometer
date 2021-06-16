import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Api from '../api/api';
import Person from './Person';
import Add from './Add';
import Popup from './Popup';

const Team = ({className}) => {
  const [people, setPeople] = useState(null);
  const [details, setDetails] = useState(null);
  const [isPopupShown, setPopup] = useState(false);
  const [person, setPerson] = useState(null);

  const togglePopup = (id, name) => {
    setPerson(() => ({id, name}));
    setPopup(popup => !popup);
  };

  useEffect(() => {
    Api.getDetails().then(({people, foodmoji, rupees}) => {
      setPeople(() => people);
      setDetails(() => ({foodmoji, rupees}));
    });
  }, []);

  const handleNewPerson = person => setPeople(people => [person, ...people]);

  const remove = () =>
    setPeople(people => people.filter(id => id !== person.id)) || togglePopup();

  const handleDelete = () =>
    Api.deletePerson(person.id).then(({error}) => !error && remove());

  return people && details ? (
    <div className={className}>
      <Add handleNewPerson={handleNewPerson} />
      {isPopupShown && (
        <Popup
          toggle={togglePopup}
          otherOptions={[{name: 'Remove', onClick: handleDelete}]}
          msg={`Are you sure you want to remove ${person.name}?`}
        />
      )}
      {people.map(id => (
        <Person
          key={id}
          foodmoji={details.foodmoji}
          rupees={details.rupees}
          id={id}
          handleDelete={handleDelete}
          onRemove={togglePopup}
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