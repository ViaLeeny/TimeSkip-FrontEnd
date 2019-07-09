import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

class ContributionCard_Gaming extends Component {
  render() {
    return (
      <div>
          <Segment> 
        <h1>User ID {this.props.contribution.user_id} says:</h1>

        <p className="comment">{this.props.contribution.text}</p>
        <img
          alt={this.props.contribution.id}
          src={this.props.contribution.url}
          className="picture"
        />
        <p> Comment Made: {this.props.contribution.created_at}</p>
        </Segment>
      </div>
    );
  }
}

export default ContributionCard_Gaming;
