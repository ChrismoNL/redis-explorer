import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import "./server-page.css";
import { initializeRoot } from "../../features/rootPassword/rootPasswordSlice";

function ServerPage() {
  const navigate = useNavigate();
  const isInitialized = useAppSelector(
    (state) => state.rootPassword.isInitialized
  );
  const hasRootPassword = useAppSelector(
    (state) => state.rootPassword.hasRootPassword
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeRoot());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isInitialized === false) {
      navigate("/init");
    } else if (isInitialized === true) {
      if (!hasRootPassword) {
        navigate("/login");
      }
    }
  }, [isInitialized]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="App"></div>;
}

export default ServerPage;
