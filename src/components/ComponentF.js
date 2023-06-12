import React from 'react';
import { UserConsumer } from './userContext';

const ComponentF = () => {
  return (
    <div>
      <UserConsumer>
        {(username) => {
          return <div> Hello {username} </div>;
        }}
      </UserConsumer>
    </div>
  );
};

export default ComponentF;
