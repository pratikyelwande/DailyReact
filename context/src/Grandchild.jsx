import React, { useContext } from 'react';
import { UserContext } from './usercontext';

function GrandChild() {
  const user = useContext(UserContext); // useContext magic here

  return (
    <div style={{ border: '1px solid red', padding: '10px', margin: '10px' }}>
      <h4>🧒 GrandChild Component</h4>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}

export default GrandChild;
