import React, { Component } from "react";

class ContributionCard extends Component {
  render() {
    return (
      <div>
        <h2>
          {" "}
          ({this.props.contribution.created_at}) User ID{" "}
          {this.props.contribution.user_id} said:
        </h2>

        <p className="comment">{this.props.contribution.text}</p>
        <img
          alt={this.props.contribution.id}
          src={this.props.contribution.url}
          onError="this.onerror=null; this.src='/images/noimage.gif';" 
          className="picture"
        />
      </div>
    );
  }
}

export default ContributionCard;
