import React from 'react'
import { Segment, Header, Image, Icon } from 'semantic-ui-react'
import ContributionContainer_Gaming from "./Timeline_Gaming/Contributions_Gaming/ContributionsContainer_Gaming"


const CONTRIBUTIONS_URL = `http://localhost:3000/contributions/`

class EventCard_Gaming extends React.Component {
  //SETTING STATE
  state = {
    contributions: [],
    filteredContributions: []
  }

  //FETCH CONTRIBUTIONS 
  componentDidMount() {
    return fetch(CONTRIBUTIONS_URL)
      .then(resp => resp.json())
      .then(contributions => {
        this.setState({ contributions });
      });
  }

  //FILTER CONTRIBUTIONS FOR THIS EVENT
  filterContributions = () => {
    //if (this.state.contributions.length > 0) {
      let eventContributions = [...this.state.contributions].filter(
        contribution => contribution.event_id === this.props.selectedEvent.id
      );
 
      return eventContributions;
  };

	render() {
		return (
			
            <div class = 'event-card'>
            <Segment padded='very'>
            <Image src={this.props.selectedEvent.image_url} size='medium' rounded centered bordered/> 
            <Header as='h2'>{this.props.selectedEvent.date.slice(0, 4)}</Header>
            <Header as='h2'>{this.props.selectedEvent.name}</Header>
              <p>
              {this.props.selectedEvent.description}
              </p>
              <Icon name='add' />
              <Icon name='heart' />
            </Segment>
            <ContributionContainer_Gaming

              event={this.props.event}
              contributions={this.filterContributions()}
            />
       
          </div>
		)
	}
}

export default EventCard_Gaming