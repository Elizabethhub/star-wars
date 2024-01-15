import React from "react";
import { Puff } from "react-loader-spinner";

const AppLoader = () => {
  return <Puff type="Puff" color="cornflowerblue" height={100} width={100} timeout={3000} wrapperClass="loader" />;
};

export default AppLoader;
