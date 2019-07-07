import React from 'react'
import TimelineCard_Gaming from './TimelineCard_Gaming'

class TimelineContainer_Gaming extends React.Component {
	
	render() {
		return (
			<div>
				
				{ this.props.gamingEvents.map((event, index) =>  <TimelineCard_Gaming key={index} date={event.date} />)}

			</div>
		)
	}

}

export default TimelineContainer_Gaming