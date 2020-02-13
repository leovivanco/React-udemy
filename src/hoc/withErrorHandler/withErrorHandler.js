import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => (props) => {
  const [error, setError] = useState({error: null});

  const reqInterceptor = axios.interceptors.request.use(req => {
    setError({ error: null });
    return req;
  });
  const resInterceptor = axios.interceptors.response.use(
    res => res,
    error => setError({ error })
  );

  useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () =>
    setError({
      error: null
    });


  return (
    <>
      <Modal show={error.error} hide={errorConfirmedHandler}>
        {error.error ? error.error.message : null}
      </Modal>
      <WrappedComponent {...props} />
    </>
  );

}

export default withErrorHandler
