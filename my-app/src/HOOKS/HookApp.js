import React, { useContext, useState } from "react";
// import { userContext } from "./App4";

export default function HookApp() {

    //  context api code here....
    // const user = useContext(userContext)
    // let setuser = user[1]
    // setuser("Kapil")
    // console.log("ontext api in effect :-", user)

    // use of state code
    const [color, setColor] = useState("red");

    return (
        <>
            <h1 style={{ backgroundColor: color }}>My favorite color is {color}! </h1>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <button type="button" onClick={() => setColor("yellow")} >Yellow</button>
            <button type="button" onClick={() => setColor("pink")} >Pink</button>
            <button type="button" onClick={() => setColor("green")}>Green</button>
        </>
    );
}
