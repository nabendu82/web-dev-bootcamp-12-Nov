import React from 'react'

const Greeting = (props) => {
    const { name, children } = props;
    
    return (
        <>
            <h1>Greeting from {name}</h1>
            <p>{children}</p>
        </>
    )
}

export default Greeting