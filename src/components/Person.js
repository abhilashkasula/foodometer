import {useEffect, useState} from 'react';
import styled from 'styled-components';
import useHover from './hooks/useHover';
import Meter from './Meter';
import Api from '../api/api';

const Name = styled.h2`
  margin: 0;
`;

const Rupees = styled.div`
  font-weight: 600;
`;

const Delete = styled.img`
  position: absolute;
  transform: translate(510%, -110%);
  width: 20px;
  cursor: pointer;
`;

const Person = ({className, foodmoji, rupees, id, onRemove}) => {
  const [ref, isHovered] = useHover();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    Api.getPerson(id).then(person => setPerson(() => person));
  }, [id]);

  const incrementCount = () => {
    Api.incrementCount(id).then(
      ({error}) =>
        !error && setPerson(person => ({...person, count: person.count + 1}))
    );
  };

  const decrementCount = () => {
    Api.decrementCount(id).then(
      ({error}) =>
        !error && setPerson(person => ({...person, count: person.count - 1}))
    );
  };

  return (
    person && (
      <div
        className={className}
        style={isHovered ? {boxShadow: '0px 0px 7px #d4dadf'} : {}}
        ref={ref}
      >
        <Delete
          src="https://img.icons8.com/material/24/000000/delete-sign--v1.png"
          style={{visibility: isHovered ? 'visible' : 'hidden'}}
          onClick={() => onRemove(person.id, person.person)}
        />
        <Name>{person.person}</Name>
        <Meter
          foodmoji={foodmoji}
          count={person.count}
          increment={incrementCount}
          decrement={decrementCount}
        />
        <Rupees>&#8377; {rupees * person.count}</Rupees>
      </div>
    )
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

export default StyledPerson;
