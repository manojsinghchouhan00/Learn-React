import React, { Component } from 'react';
import Condition1 from './Condition1';
import Condition2 from './Condition2';

export default class ConditionRender extends Component {
    constructor(props){
        super(props);
        console.log(this.props.isRender)
        this.state = {
            isRender : this.props.isRender
        }
    }
    render() {
        // const isGoal = ;
        console.log("first", this.state.isRender)
        
        if (this.state.isRender) {
            return (<>
                <Condition1 isRender={this.state.isRender}/>
                <button onClick={()=>this.setState({isRender: !this.state.isRender})}>Condition change 1{this.state.isRender} 1</button>
            </>);
        }
        return (<>
            <Condition2 isRender={this.state.isRender}/>
            <button onClick={()=>this.setState({isRender: !this.state.isRender})}>Condition change 2{this.state.isRender}2</button>
        </>);
    }
}
