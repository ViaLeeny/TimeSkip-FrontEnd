import React from 'react'
import ContributionContainer from '../ContributionContainer.js'
const CONTRIBUTIONS_URL = `http://localhost:3000/contributions/`;
class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: []
    };
  }

  componentDidMount() {
    fetch(CONTRIBUTIONS_URL)
      .then(resp => resp.json())
      .then(contributions => {
        //console.log(`All Contributions:`)
        //console.log(contributions)

        this.setState({ contributions: contributions });
      });
  }

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


		<div>
			<img src={this.props.event.image_url}/>
      <ContributionContainer event={this.props.event} contributions={this.state.contributions} />
      <div/>

		</div>

		)
	}
}

export default EventCard