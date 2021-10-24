import { useUser } from '../../src/context/userContext';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
  const { userData } = useUser();
console.log("user data en el private component", userData);
  if (roleList.includes(userData)) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;