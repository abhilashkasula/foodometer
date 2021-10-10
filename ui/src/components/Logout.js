import {useState} from 'react';
import Popup from './Popup';
import Api from '../api/api';
import {StyledList, OptionLink} from './Nav';

const Logout = ({setAuthentication, center}) => {
  const [isPopupShown, setPopup] = useState(null);

  const togglePopup = () => setPopup(() => !isPopupShown);

  const logout = () =>
    Api.logout().then(() => togglePopup() || setAuthentication(() => false));

  const handleLogout = e => e.preventDefault() || togglePopup();

  return (
    <StyledList center={center}>
      {isPopupShown && (
        <Popup
          toggle={togglePopup}
          otherOptions={[{name: 'Logout', onClick: logout}]}
          msg={`Are you sure you want to logout?`}
        />
      )}
      <li>
        <OptionLink to="/" onClick={handleLogout}>
          Logout
        </OptionLink>
      </li>
    </StyledList>
  );
};

export default Logout;
