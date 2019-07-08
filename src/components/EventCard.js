import React from "react";
import ContributionContainer from "../ContributionContainer.js";
const CONTRIBUTIONS_URL = `http://localhost:3000/contributions/`;
class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: [],
      filteredContributions: []
    };
  }
  //ROSS: on Mount, ALL contributions are fetched and those for this event are
  //saved to state
  componentDidMount() {
    return fetch(CONTRIBUTIONS_URL)
      .then(resp => resp.json())
      .then(contributions => {
        this.setState({ contributions });
      });
  }

  filterContributions = () => {
    //if (this.state.contributions.length > 0) {
      let eventContributions = [...this.state.contributions].filter(
        contribution => contribution.event_id === this.props.event.id
      );
      console.log("Here are the filtered contributions for this event:");
      console.log(eventContributions);
      // PITFALL: I had two setState functions in one componentDidMount
      //this caused intermittant "undefined X" bugs!
      // this.setState({
      //   contributions: contributions,
      //   filteredContributions: eventContributions
      // });
      return eventContributions;
   //}
  };

  render() {
    return (
      <div className="eventCard">
        <br />
        <br />

        <h1 className="title">{this.props.event.name}</h1>

        <div className="date">
          <p>Date of Expedition: {this.props.event.date}</p>
        </div>

        <div>
          <img className="picture" src={this.props.event.image_url} />
        </div>

        <div className="description">
          <p>{this.props.event.description}</p>
        </div>

        <div>
          <ContributionContainer
            event={this.props.event}
            contributions={this.filterContributions()}
          />
        </div>
      </div>
    );
  }
}

export default EventCard;
