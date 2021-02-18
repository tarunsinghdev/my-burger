import { useState, useEffect } from 'react';

const HttpErrorHandler = (httpClient) => {
  const [error, setError] = useState(null);

  const reqInterceptors = httpClient.interceptors.request.use((request) => {
    setError(null);
    return request;
  });

  const resInterceptors = httpClient.interceptors.response.use(
    (res) => res,
    (err) => {
      setError(err);
    }
  );

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(reqInterceptors);
      httpClient.interceptors.response.eject(resInterceptors);
    };
  }, [reqInterceptors, resInterceptors, httpClient]);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
};
export default HttpErrorHandler;
