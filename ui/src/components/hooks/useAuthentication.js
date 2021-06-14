import {useEffect, useState} from 'react';
import Api from '../../api/api';

const useAuthentication = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    Api.isAuth().then(({error}) =>
      setisAuthenticated(() => (error ? false : true))
    );
  }, []);

  return [isAuthenticated, setisAuthenticated];
};

export default useAuthentication;
