import React, { useState } from 'react'
import { createContext } from 'react'

export default function Context({ p}) {
    const [user, setUser] = useState("jay");
    const userContext = createContext();
    return (
        <userContext.Provider value={user}>
           { console.log("children",user,p)}
            <h1>Hello I am {user}</h1>
           { p }
        </userContext.Provider>
    )
}
