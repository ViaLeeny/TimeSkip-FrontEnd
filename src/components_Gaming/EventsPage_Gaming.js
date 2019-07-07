import React from 'react'
import TimelineContainer_Gaming from '../components_Gaming/Timeline_Gaming/TimelineContainer_Gaming';


const eventsURL = "http://localhost:3001/events"

class EventsPage_Gaming extends React.Component {
	state = {
		events: []
	}

	componentDidMount() {
		fetch(eventsURL)
		.then((resp) => resp.json())
		.then((data) => this.setState({events: data}))
	}

	//SORTED GAMING EVENTS
	sortedGamingEvents = () => {
		const eventsArray = [...this.state.events]

		//PASSING ONLY GAMING EVENTS TO SORT FUNCTION BELOW
		const onlyGamingEvents = [...eventsArray].filter(event => event.topic_id === 2)

		//sorts all of the events based on the conditions below
		return onlyGamingEvents.sort((event1, event2)=>{

		//bubble sort algorithm
			const event1date = parseInt(event1.date.slice(0,4),10)
			const event2date = parseInt(event2.date.slice(0,4),10)
			return event1date < event2date ? -1 : 0
		})
	}

	render() {
		return(
		<div>
			<TimelineContainer_Gaming gamingEvents={this.sortedGamingEvents()}/>
		</div>

		)
	}
}

export default EventsPage_Gaming
