import React from "react";
import ContributionContainer from "../ContributionContainer.js";
import ContributionForm from "./ContributionForm.js";
const CONTRIBUTIONS_URL = `http://localhost:3000/contributions/`;
class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: [],
      showForm: false,
      contributionToEdit: null
    };
  }
  //ROSS: on Mount, fetches ALL contributions and saves to state
  componentDidMount() {
    this.fetchContributions();
  }

  setContributionToEdit = contribution => {
    this.setState({ contributionToEdit: contribution }, () =>
      console.log(this.state.contributionToEdit)
    );
  };

  fetchContributions = () => {
    return fetch(CONTRIBUTIONS_URL)
      .then(resp => resp.json())
      .then(contributions => {
        this.setState({ contributions });
      });
  };

  toggleShowForm = (bool = "jeff") => {
    if (bool === "jeff") {
      this.setState({ showForm: !this.state.showForm });
    } else {
      this.setState({ showForm: bool });
      //debugger;
    }
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


      <div className="card">
        <h1 className="title">{this.props.event.name}</h1>

        <div className="date">
          <p>Date of Expedition: {this.props.event.date}</p>
        </div>

        <div>
          <img className="picture" src={this.props.event.image_url} />
        </div>

        <div className="description-s">
          <p>{this.props.event.description}</p>
        </div>

      </div>



        <br />
        <button
          onClick={() => {
            //make sure form is cleared when it is opened/closed:
            this.setState({ showForm: !this.state.showForm, contributionToEdit: null })

          }}
          class="comment-btn"
          type="button"
        >
          {this.state.showForm ? "Cancel" : "Add Comment"}
        </button>

        <br />
        <br />
        <div>
          {this.state.showForm ? (
            <ContributionForm
              toggleForm={this.toggleShowForm}
              event={this.props.event}
              fetchContributions={this.fetchContributions}
              contributionToEdit={this.state.contributionToEdit}
            />
          ) : null}
        </div>

        <div>
          <ContributionContainer
            event={this.props.event}
            contributions={this.reverseContributions()}
            fetchContributions={this.fetchContributions}
            toggleForm={this.toggleShowForm}
            setContributionToEdit={this.setContributionToEdit}
          />
        </div>
      </div>
    );
  }
}

export default EventCard;
