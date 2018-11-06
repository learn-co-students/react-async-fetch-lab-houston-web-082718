// create your App component here
import React from 'react'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            spacePeople: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => {
                console.log(data, data.people)
                this.setState({
                    spacePeople: data.people
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <h3>Astronauts</h3>
                {
                    this.state.spacePeople.map((person) => {
                        return <p key={person.name}>{person.name}</p>
                    })
                }
            </React.Fragment>
        )
    }
}