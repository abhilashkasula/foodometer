import {useEffect, useState} from 'react';
import Api from '../../api/api';

const useAuthentication = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.isAuth().then(({error}) => {
      setisAuthenticated(() => (error ? false : true));
      setLoading(() => false);
    });
  }, []);

  return [isAuthenticated, setisAuthenticated, loading];
};

export default useAuthentication;
