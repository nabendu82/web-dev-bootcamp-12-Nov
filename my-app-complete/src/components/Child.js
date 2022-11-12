import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return <h1>Child component - {user}</h1>
                }}
            </UserConsumer>
        )
    }
}

export default Child