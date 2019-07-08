import React from 'react'

class TimelineCard extends React.Component {
	render() {
		return (
			
		<div>
<<<<<<< HEAD:src/components/Timeline/TimelineCard.js
			<button className="button" onClick={() => this.props.selectYear(this.props.eventObj)}>{this.props.date.slice(0, 4)}</button>
=======
			
			<button className="button">{this.props.date.slice(0, 4)}</button>
	
>>>>>>> cf32789296409452933455a29b139fcc0a0bc1ef:src/components/Timeline/TimelineCard_Space.js
		</div>
		)
	}
}

export default TimelineCard