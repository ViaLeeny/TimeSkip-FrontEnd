import React, { Component } from "react";
import uniqueId from 'react-html-id';


class ContributionCard extends Component {

  constructor() {
    super()
    uniqueId.enableUniqueIds(this)
  }
  render() {
    return (
      <div className="rowC">

      <div className="comment-container">
        <h3 className="your-comment">Your Comment:</h3>
        <p className="comment" id={this.lastUniqueId()}>{this.props.contribution.text}</p>
        <label htmlfor={this.nextUniqueId()}>
        <img
          alt={this.props.contribution.id}
          src={this.props.contribution.url}
          onError="this.onerror=null; this.src='/images/noimage.gif';"
          className="contributionPic"
        />
      </label>
      </div>




      </div>
    );
  }
}

export default ContributionCard;
