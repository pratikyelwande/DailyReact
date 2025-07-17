import { useState } from 'react'
import { UserContext } from './usercontext'
import Parent from './Parent';
function App() {
 const userdata={
  name:"pratik",
  role:"admin"
 };
 return(<>
  <UserContext.Provider value={userdata}>
  <Parent/>
  </UserContext.Provider>

 </>)
  
}

export default App
