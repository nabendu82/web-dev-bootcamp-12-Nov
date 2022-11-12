import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.userRef = React.createRef()
        this.commentRef = React.createRef()
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.userRef.current.value)
        console.log(this.commentRef.current.value)
    }

    componentDidMount(){
        this.userRef.current.focus()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" ref={this.userRef}  />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment </label>
                    <textarea id="comment" ref={this.commentRef}></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RefsDemo