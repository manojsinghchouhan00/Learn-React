import axios from 'axios';
import React, { Component } from 'react'

export default class File1 extends Component {
    constructor() {
        super();
        this.state = {
            "firstName": "",
            "lastName": "",
            "loginId": "",
            "password": "",
            "roleId": ""
        }
    }
    // https://jsonplaceholder.typicode.com/todos
    update = () => {
        // fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(result => this.setState({ data: result })).catch((err)=>{
        //     console.log("error :",err)
        // })
        console.log("first")
        axios.post("https://manraj-ors-1.onrender.com/marksheet", this.state).then((result)=>{
            // console.log("Axios : ",result.data)
            // this.setState({ data: result.data })
        }).catch((err)=>{
            console.log(" iNternet error :")
        })

    }
    componentDidMount() {
        this.update();
    }
    handleDelete(id) {
        // console.log("Delete id :-", id);
        // fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        //     method: 'DELETE',
        // });
        // this.update();
    }
    render() {
        // console.log(this.state.data)
        return (
            <div>
                <h1>Api caling</h1>
                <table border="1" cellPadding={"15px"}>
                    <thead>
                        <tr>
                            <th>S .no.</th>
                            <th>Id</th>
                            <th>User Id</th>
                            <th>Title</th>
                            <th>Value</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data && this.state.data.map((item, i) => {
                                return (

                                    <tr key={item.id}>
                                        <td>{i + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.title.slice(0, 20)}</td>
                                        <td>{item.body.slice(0, 50)}</td>
                                        <td>
                                            <button
                                                onClick={() => this.handleDelete(item.id)}>
                                                Delete
                                            </button>
                                            Edit
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


//  // .................. GET FETCH METHOD ....................//  //

// fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(result => this.setState({ data: result }))
// console.log("first")

// //.................... POST FETCH METHOD.....................// //

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//  // .................. PUT FETCH METHOD ....................//  //

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//  // .................. DELETE FETCH METHOD ....................//  //

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });


//  // .................. PATCH FETCH METHOD ....................//  //

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//  // .................. Filter data with GET FETCH METHOD ....................//  //

// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));