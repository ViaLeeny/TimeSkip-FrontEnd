import React from 'react'
import TimelineCard from './TimelineCard.js'

class TimelineContainer extends React.Component {
	render() {
		return (
			<div>
				{this.props.events.map((event, index) => <TimelineCard key={index} date={event.date} />)}

			</div>
		)
	}

}

export default TimelineContainer