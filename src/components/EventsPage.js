import React from 'react'
import TimelineContainer from './Timeline/TimelineContainer.js'
import EventCard from './EventCard'

const eventsURL = "http://localhost:3000/events"

class EventsPage extends React.Component {
	state = {
		events: [],
		selectedYear: []
	}

	componentDidMount() {
		fetch(eventsURL)
		.then((resp) => resp.json())
		.then((data) => this.setState({events: data}))
	}

	sortedEvents = () => {
		const eventsArray = [...this.state.events]
		console.log(eventsArray)

		//sorts all of the events based on the conditions below
		return eventsArray.sort((event1, event2)=>{

		//bubble sort algorithm
			const event1date = parseInt(event1.date.slice(0,4),10)
			const event2date = parseInt(event2.date.slice(0,4),10)
			return event1date < event2date ? -1 : 0
		})
	}

	selectYearOfEvent = (eventObj) => {
		this.setState({selectedYear: [eventObj] })

	}

	render() {
			const {events, selectedYear} = this.state;
		return(
		<div>
			<TimelineContainer events={this.sortedEvents()} selectionOfYear={this.selectYearOfEvent}/>
			{selectedYear.length > 0 ?
				(<EventCard event={selectedYear[0]} />) : console.log(selectedYear)
			}

		</div>

		)
	}
}

export default EventsPage