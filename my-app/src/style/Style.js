import React, { Component } from 'react'
import "./style.css"
import file from "./myStyle.module.css"
export default class Style extends Component {
  render() {
    const mystyle = {
      backgroundColor: "green",
      color: "red",
      textAlign: "center"
    }

    return (
      <div >
        <h1 style={mystyle}>This is inline style with js object</h1>
        <h1 style={{color:"red"}}>This is inline style</h1>
        <p id='main'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur minus aperiam facilis iste. Eum labore quod minima illo iusto facilis exercitationem repellat cum, at optio fugit libero. Pariatur, tenetur officiis?
        </p>
        <p className={file.first}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate pariatur totam ad quod dicta hic exercitationem consequuntur nesciunt dolorem. Laborum ex eos commodi ipsam amet labore deleniti excepturi neque non!
        </p>
      </div>
    )
  }
}
