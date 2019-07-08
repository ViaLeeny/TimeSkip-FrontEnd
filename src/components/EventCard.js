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
		<div>
			<img src={this.props.event.image_url}/>
      <ContributionContainer event={this.props.event} contributions={this.state.contributions} />
		</div>

		)
	}
}

export default EventCard