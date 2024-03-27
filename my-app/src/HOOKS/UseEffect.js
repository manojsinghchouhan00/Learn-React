import React, { useContext, useEffect, useState } from 'react'
import { userContext } from './App4';
// import { userContext } from './App4';

export default function UseEffect() {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    //  context api code here....
    const user = useContext(userContext)
    let [users ,setUser] = user
    const handleUserUpdate = () => {
        setUser("Kapil");
    };
    console.log("Context api in effect :-", user)


    useEffect(() => {
        // console.log("effect user", user)
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

    }, [count1]);
    // cleanup..............................
    // useEffect(() => {
    //     let timer = setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    //     {console.log("effect",timer)}

    //     return () => clearTimeout(timer)
    // },[]);

    return (
        <>
            {console.log("html render")}
            <h1>UseEffect in react</h1>
            <h1>I've rendered {count} +++{count1}times!</h1>
            <button onClick={() => setCount1(count1 + 2)}>+</button>
            <br /><hr />

            <h1>context api button</h1>
            <button onClick={handleUserUpdate}>Update Context User</button>

        </>
    )
}
