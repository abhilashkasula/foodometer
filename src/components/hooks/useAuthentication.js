import {useState} from 'react';

const useAuthentication = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  return isAuthenticated;
};

export default useAuthentication;
