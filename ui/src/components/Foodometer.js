import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Api from '../api/api';
import Person from './Person';
import Add from './Add';
import Popup from './Popup';
import Loading from './Loading';

const Team = ({className, setTeamLoaded, foodmoji}) => {
  const [people, setPeople] = useState(null);
  const [isPopupShown, setPopup] = useState(false);
  const [person, setPerson] = useState(null);

  const togglePopup = (id, name) => {
    setPerson(() => ({id, name}));
    setPopup(popup => !popup);
  };

  useEffect(() => {
    Api.getPeople().then(({people}) => {
      setTeamLoaded(true);
      setPeople(() => people);
    });
  }, []);

  const handleNewPerson = person => setPeople(people => [person, ...people]);

  const remove = () =>
    setPeople(people => people.filter(id => id !== person.id)) || togglePopup();

  const handleDelete = () =>
    Api.deletePerson(person.id).then(({error}) => !error && remove());

  return people && foodmoji ? (
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
          foodmoji={foodmoji.foodmoji}
          rupees={foodmoji.value}
          id={id}
          handleDelete={handleDelete}
          onRemove={togglePopup}
        />
      ))}
    </div>
  ) : (
    <Loading center />
  );
};

const StyledTeam = styled(Team)`
  display: flex;
  flex-wrap: wrap;
  padding: 62px 92px;
  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`;

const Foodometer = ({className, setTeamLoaded, foodmoji}) => {
  document.body.style.background = 'white';

  return (
    <div className={className}>
      <StyledTeam setTeamLoaded={setTeamLoaded} foodmoji={foodmoji} />
    </div>
  );
};

const StyledFoodometer = styled(Foodometer)`
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

export default StyledFoodometer;
