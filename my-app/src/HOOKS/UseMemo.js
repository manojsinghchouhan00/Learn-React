import React, { useMemo, useState } from 'react'


const nums = new Array(3000000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 3000000 - 10
  }
})
export default function UseMemo() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(nums);


  // const magical = number.find(item => item.isMagical === true, console.log(nums)) // Expensive Computation
  const magical = useMemo(() => number.find(item => item.isMagical === true,console.log(nums)), [])

  console.log("magical :-", magical)

  return (
    <div>
      <h1>UseMemo component Magical number: - {magical.index} </h1>
      <h5>Count value :- {count}</h5>
      <button onClick={() => setCount(count + 1)}>Count incriment</button>
      {/* <button onClick={() => {
        setCount((count) => count + 1);
        if (count == 10) {
          setNumber(new Array(10_000_000).fill(0).map((_, i) => {
            return {
              index: i,
              isMagical: i === 9_000_000
            }
          }))
        }
      }}>
        count is {count}
      </button> */}

    </div>
  )
}
