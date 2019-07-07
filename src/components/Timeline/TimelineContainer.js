import React from 'react'
import TimelineCard_Space from './TimelineCard_Space'

class TimelineContainer extends React.Component {
	
	render() {
		return (
			<div>
				
				{ this.props.events.map((event, index) =>  <TimelineCard_Space key={index} date={event.date} />)}

			</div>
		)
	}

}

export default TimelineContainer