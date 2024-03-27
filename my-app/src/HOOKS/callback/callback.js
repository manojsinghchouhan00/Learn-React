import React, { memo } from 'react'

function Callback({user,getUser}) {
    console.log("Callback rendering...")

  return (
    <div>
        <h1>Callback child of usecallback  conponents</h1>
        <p>I am  {user }. { getUser()}</p>
    </div>
  )
  
}
export default memo(Callback)