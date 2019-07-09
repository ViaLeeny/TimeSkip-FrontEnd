import React from 'react'
import { Segment, Header, Image, Icon } from 'semantic-ui-react'


class EventCard_Gaming extends React.Component {


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
            
          </div>
		)
	}
}

export default EventCard_Gaming