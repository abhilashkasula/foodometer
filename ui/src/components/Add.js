import {useState} from 'react';
import styled from 'styled-components';
import Api from '../api/api';
import useHover from './hooks/useHover';
import Loading from './Loading';

const NameField = styled.input`
  border: none;
  outline: none;
  text-align: center;
  font-size: 25px;
  width: 100%;
  font-family: Quattro;
  font-weight: 600;
  ::placeholder {
    color: #9daab6;
  }
`;

const AddButton = styled.button`
  width: 100%;
  height: 40px;
  background: black;
  color: white;
  font-family: Quattro;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  cursor: ${({isLoading}) => (isLoading ? 'not-allowed' : 'pointer')};
  opacity: ${({isLoading}) => (isLoading ? 0.35 : 1)};
`;

const Add = ({className, handleNewPerson}) => {
  const [name, setName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [ref, isHovered] = useHover();

  const handleChange = e => setName(() => e.target.value);
  const handleAdd = () => {
    setLoading(() => true);
    Api.addPerson(name).then(({error, res}) => {
      !error && (handleNewPerson(res.id) || setName(() => ''));
      setLoading(() => false);
    });
  };

  return (
    <div
      className={className}
      ref={ref}
      style={isHovered ? {boxShadow: '0px 0px 7px #d4dadf'} : {}}
    >
      <NameField
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      {isLoading && <Loading />}
      <AddButton
        onClick={isLoading ? () => {} : handleAdd}
        isLoading={isLoading}
      >
        Add
      </AddButton>
    </div>
  );
};

const StyledAdd = styled(Add)`
  border: 1px solid #d4dadf;
  border-radius: 4px;
  padding: 32px 24px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
  height: 193px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 16px;
  }
`;

export default StyledAdd;
