import {useState} from 'react';
import styled from 'styled-components';
import useHover from './hooks/useHover';
import Api from '../api/api';
import {useHistory} from 'react-router';

const Label = styled.label`
  color: #9daab6;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1.2px;
  margin-bottom: 8px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Input = styled.input`
  border: 1px solid #d4dadf;
  border-radius: 4px;
  height: 38px;
  padding: 0 8px;
  font-size: 16px;
  outline-color: black;
  ::placeholder {
    color: #9daab6;
  }
`;

const Submit = styled.button`
  width: 100%;
  height: 40px;
  color: white;
  background: black;
  line-height: 1em;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: ${({isHovered}) => (isHovered ? 'black' : '#282828')};
  cursor: pointer;
  margin-top: 15px;
  font-size: 16px;
`;

const Form = ({className, isLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [ref, isHovered] = useHover();

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handleConfirmChange = e => setConfirm(e.target.value);
  const history = useHistory();

  const handleLogin = () => {
    Api.login(email, password).then(({error}) => error || history.push('/'));
  };

  const handleSignup = () => {
    Api.signup(email, password, confirm).then(
      ({error}) => error || history.push('/login')
    );
  };

  return (
    <div className={className}>
      <Field>
        <Label>EMAIL ADDRESS</Label>
        <Input
          type="text"
          placeholder="name@company.com"
          onChange={handleEmailChange}
          value={email}
        />
      </Field>
      <Field>
        <Label>PASSWORD</Label>
        <Input
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </Field>
      {!isLogin && (
        <Field>
          <Label>CONFIRM PASSWORD</Label>
          <Input
            type="password"
            placeholder="password"
            onChange={handleConfirmChange}
            value={confirm}
          />
        </Field>
      )}
      <Submit
        ref={ref}
        isHovered={isHovered}
        onClick={isLogin ? handleLogin : handleSignup}
      >
        {isLogin ? 'Sign in' : 'Create your account'}
      </Submit>
    </div>
  );
};

const StyledForm = styled(Form)`
  padding: 32px 24px;
  border-bottom: 1px solid #d4dadf;
`;

export default StyledForm;
