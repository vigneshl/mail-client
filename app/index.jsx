import React, { Component } from 'react'
import { render } from 'react-dom'
import Login from './pages/login.jsx'

class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Login />
            </div>
        )
    }

}

render(<App />, document.getElementById('container'))
