import React from 'react'

class EventCard extends React.Component {

	render() {
		return(
		<div className="eventCard">

			<br />
			<br />

			<h1 className="title">{this.props.event.name}</h1>

			<div className="date">
				<p>Date of Expedition: {this.props.event.date}</p>
			</div>

			<div>
				<img className="picture" src={this.props.event.image_url}/>
			</div>

			<div className="description">
				<p>{this.props.event.description}</p>
			</div>

			<button className="button">Contribute to this</button>

		</div>

		)
	}
}

export default EventCard