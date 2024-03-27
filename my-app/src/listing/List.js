import React, { Component } from 'react'

export default class List extends Component {

    render() {
        let arr = ["Tea", "Cofee", "Samosa", "Pizza", "Water bottle"];

        let arr1 = [
            { nam: "Jay", age: 20, course: "javascript" },
            { nam: "Vijay", age: 22, course: "Python" },
            { nam: "Ajay", age: 25, course: "java" },
            { nam: "Kumar", age: 21, course: "C++" },
            { nam: "Vinay", age: 26, course: ".Net" },
            { nam: "Avinash", age: 30, course: "React" },
            { nam: "Ram", age: 23, course: "Angular" },
        ]

        return (
            <div>
                <h1>Listing with react</h1>
                <ul>
                    {
                        arr.map((item, i) => <li key={i}> {item}</li>)
                    }
                </ul>
                <h2>Listing With object ??</h2>
                <h3>Table of student</h3>
                <table border={"1"} cellPadding="10px">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Cource</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr1.map((item, i) => {
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.nam}</td>
                                    <td>{item.age}</td>
                                    <td>{item.course}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
