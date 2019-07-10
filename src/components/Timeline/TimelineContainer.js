import React from 'react'
import TimelineCard from './TimelineCard'

class TimelineContainer extends React.Component {

	render() {
		return (
			<div className="ui segment inverted blue gaming-timeline">
				<h1>Space Timeline</h1>
				
				{this.props.events.map((event, index) => <TimelineCard key={index} date={event.date} eventObj={event} selectYear={this.props.selectionOfYear}/>)}

			</div>
		)
	}

}

export default TimelineContainer