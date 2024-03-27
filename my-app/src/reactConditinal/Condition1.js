import React, { Component } from 'react'

export default class  Condition1 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.isRender?"True":"false"} Component one</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium autem aut blanditiis hic fuga placeat quisquam illo culpa quam quaerat iure nobis, neque officiis molestiae dicta tempora, quos eum laborum.
        </p>
        Condition1
      </div>
    )
  }
}
