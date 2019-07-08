import React, { Component } from "react";

class ContributionCard extends Component {
  render() {
    return (
      <div>
        <h1>User ID {this.props.contribution.user_id} says:</h1>

        <p className="comment">{this.props.contribution.text}</p>
        <img
          alt={this.props.contribution.id}
          src={this.props.contribution.url}
          className="picture"
        />
        <p> Cooment Made: {this.props.contribution.created_at}</p>
      </div>
    );
  }
}

export default ContributionCard;
