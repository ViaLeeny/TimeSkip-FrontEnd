import React from "react";

const CONTRIBUTIONS_URL = `http://localhost:3001/contributions/`;

class ContributionContainer extends React.Component {
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
        //console.log(contributions)
        this.setState({ contributions: contributions });
      });
  }

  render() {
    return (
      <div className="contribution">
        <h3>Here's your contribution:</h3>
        <img src={this.state.contributions.length > 0 ? this.state.contributions[0].url : "No Contributions"}/>
        <p> {this.state.contributions.length > 0 ? this.state.contributions[0].text : "No Contributions"}</p>
      </div>
    );
  }
}

export default ContributionContainer;
