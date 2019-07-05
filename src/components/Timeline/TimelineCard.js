import React from 'react'

class TimelineCard extends React.Component {
	render() {
		return (
		<div>
			<button className="button">{this.props.date.slice(0, 4)}</button>
		</div>
		)
	}
}

export default TimelineCard