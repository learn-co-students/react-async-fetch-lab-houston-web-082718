import React from 'react'

export default class App extends React.Component {

    state = {
        spacePeople: {}
    }

    componentDidMount() {
        const astro_url = "http://api.open-notify.org/astros.json"
        fetch(astro_url)
        .then(r=> r.json())
        .then(r=> this.setState({spacePeople: r.people}))
    }

    render

    render () {
        const { spacePeople } = this.state
        console.log(Object.values(spacePeople))
        return (
            <div>
            {Object.values(spacePeople).map(p=> {
                return <div key={p.name}>{p.name}</div>
            })}
            </div>
        )
    }
}
