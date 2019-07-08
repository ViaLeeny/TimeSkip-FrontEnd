import React from 'react'
import TimelineCard from './TimelineCard'

class TimelineContainer extends React.Component {

	render() {
		return (
			<div>


				{this.props.events.map((event, index) => <TimelineCard key={index} date={event.date} eventObj={event} selectYear={this.props.selectionOfYear}/>)}

			</div>
		)
	}

}

export default TimelineContainer