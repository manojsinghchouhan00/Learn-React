import React, { useCallback, useState } from 'react'
import Callback from './callback'

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Aakash");

  const getUser = useCallback(() => {
    console.log("first")
    return "Jayendra" ;
  })
  return (
    <div>
      <h1>UseCallback Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incriments</button>
      <hr />
      <Callback user={user} getUser={getUser} />
    </div>
  )
}
