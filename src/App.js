// create your App component here
import React from 'react'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(json => this.setState({people: json.people}))
    }

    render() {
        return (
            <React.Fragment>
                <h3>Astronauts</h3>
                {
                    this.state.people.map(person => {
                        return <p key={person.name}>{person.name}</p>
                    })
                }
            </React.Fragment>
        )
    }

}

export default App