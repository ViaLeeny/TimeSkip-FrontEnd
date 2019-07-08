import React from 'react'

class EventCard extends React.Component {

	render() {
		return(
		<div>
			<img src={this.props.event.image_url}/>

		</div>

		)
	}
}

export default EventCard