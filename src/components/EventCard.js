import React from "react";
import ContributionContainer from "../ContributionContainer.js";
import ContributionForm from "./ContributionForm.js";
const CONTRIBUTIONS_URL = `http://localhost:3000/contributions/`;
class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: [],
      showForm: false
    };
  }
  //ROSS: on Mount, fetches ALL contributions and saves to state
  componentDidMount() {
    this.fetchContributions();
  }

  fetchContributions = () => {
    return fetch(CONTRIBUTIONS_URL)
      .then(resp => resp.json())
      .then(contributions => {
        this.setState({ contributions });
      });
  }

  toggleShowForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  // ROSS: returns all contributions for this event. Called in the render.
  filterContributions = () => {
    // QUESTION: as this is dependent on state, and is called in the render
    // does React call it once the fetch has updated state?
    let eventContributions = [...this.state.contributions].filter(
      contribution => contribution.event_id === this.props.event.id
    );
    console.log("Here are the filtered contributions for this event:");
    console.log(eventContributions);
    // PITFALL: I had two setState functions in one componentDidMount
    //this caused intermittant "undefined X" bugs!
    return eventContributions;
  };

  reverseContributions = () => {
    return this.filterContributions().reverse();
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

        <button
          onClick={() => this.setState({ showForm: !this.state.showForm })}
          class="comment-btn"
          type="button"
        >
          Add Comment
        </button>

        <div>
          {this.state.showForm ? (
            <ContributionForm
              toggleForm={this.toggleShowForm}
              event={this.props.event}
              fetchContributions={this.fetchContributions}
            />
          ) : null}
        </div>

        <div>
          <ContributionContainer
            event={this.props.event}
            contributions={this.reverseContributions()}
          />
        </div>
      </div>
    );
  }
}

export default EventCard;
