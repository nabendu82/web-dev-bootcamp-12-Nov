import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount(){
        document.title = `Count - ${this.state.count}`
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log('Updating document title')
            document.title = `Count - ${this.state.count}`
        }
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count - {this.state.count}</button>
            </>
        )
    }
}

export default ClassCounter