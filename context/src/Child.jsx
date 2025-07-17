
import GrandChild from './Grandchild';
import { UserContext } from './usercontext';
import React, { useContext } from 'react';

function Child() {
    const user = useContext(UserContext); // useContext magic here

  return (
    <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
      <h3>👶 Child Component</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <GrandChild />
    </div>
  );
}

export default Child;
