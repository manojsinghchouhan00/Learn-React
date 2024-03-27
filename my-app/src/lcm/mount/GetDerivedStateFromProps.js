import React from 'react';
export default class Mounting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "green", color: "green" };
        console.log("first constructor")
    }
    componentDidMount() {
        // setTimeout(() => {
        //   this.setState({favoritecolor: "yellow"})
        // }, 1000)
        console.log("four Component did mount")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Second getDerivedStateFromProps")

        return { favoritecolor: props.color };
        //   return {favoritecolor: state.color };
    }
    changeState = () => {
        console.warn("Third Change state props")
        this.setState({ favoritecolor: "Black", color: "Black" })
    }
    render() {
        console.log("Third render")
        return (
            <>
                <h1>
                    My favoritecolor is <span style={{ backgroundColor: this.state.favoritecolor }}>{this.state.favoritecolor}</span>
                    and color :- <span style={{ backgroundColor: this.state.color, color: "white" }}>{this.state.color}</span>
                </h1>
                <button onClick={this.changeState}>Click to change state</button>
            </>
        );
    }
}