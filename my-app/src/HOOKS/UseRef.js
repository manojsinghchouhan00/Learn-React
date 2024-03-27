import React, { useState, useEffect, useRef } from 'react'

export default function UseRef() {
    const [count, setCount] = useState(0);
    const num = useRef(0);
    const btnref = useRef(null);
    // const inputElement = useRef();
    // let num = 0;
    useEffect(() => {
        // num += 1 ;
        num.current += 1;
        console.log("Number :-", num.current)
        console.log("count :- ", count)

        btnref.current.style.background="red"
        
        // count.current = count.current + 1;
    });

    const handleRef = () => {
        setCount(count + 1)
        // count.current.focus()
        // count.current.value = 1000;
    }
    return (

        <>
            <h1>UseRef</h1>
            {/* <input
                // ref={count}
                type="text"
                value={count}
            /> */}
            <button ref={btnref} onClick={() => handleRef()}>count</button>
            <p>Render Count: {count} {num.current} </p>
        </>
    )
    ///
}
