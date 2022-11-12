import React, { Component } from 'react'
import ChildLifecycle from './ChildLifecycle'

class ParentLifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'ParentLifecycle'
        }
        console.log('ParentLifecycle constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('ParentLifecycle getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('ParentLifecycle componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('ParentLifecycle shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('ParentLifecycle getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('ParentLifecycle componentDidUpdate')
    }

    render() {
        console.log('ParentLifecycle render')

        return (
            <>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({ name: 'TWD' })}>Change State</button>
                <ChildLifecycle />
            </>
        )
    }
}

export default ParentLifecycle