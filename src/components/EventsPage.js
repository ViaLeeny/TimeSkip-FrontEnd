import React from 'react'
import TimelineContainer from './Timeline/TimelineContainer.js'


const eventsURL = "http://localhost:3001/events"

class EventsPage extends React.Component {
	state = {
		events: []
	}

	componentDidMount() {
		fetch(eventsURL)
		.then((resp) => resp.json())
		.then((data) => this.setState({events: data}))
	}

	sortedEvents = () => {
		const eventsArray = [...this.state.events]

		//sorts all of the events based on the conditions below
		return eventsArray.sort((event1, event2)=>{

		//bubble sort algorithm
			const event1date = parseInt(event1.date.slice(0,4),10)
			const event2date = parseInt(event2.date.slice(0,4),10)
			return event1date < event2date ? -1 : 0
		})
	}

	render() {
		return(
		<div>
			<TimelineContainer events={this.sortedEvents()}/>
		</div>

		)
	}
}

export default EventsPage