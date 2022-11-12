import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }
        // this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        // this.state.count = this.state.count + 1
    }

    incrementFive = () => {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }

    render() {
        return (
            <>
                <h1>Count - {this.state.count}</h1>
                {/* <button onClick={this.incrementCount.bind(this)}>Increment</button> */}
                {/* <button onClick={() => this.incrementCount()}>Increment</button> */}
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.incrementFive}>Increment 5</button>
            </>
        )
    }
}

export default Counter