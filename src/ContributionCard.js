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
        <p className="comment" id={this.lastUniqueId()}>{this.props.contribution.text}</p>
        <label htmlfor={this.nextUniqueId()}>
        <img
          alt={this.props.contribution.id}
          src={this.props.contribution.url}
          onError="this.onerror=null; this.src='/images/noimage.gif';"
          className="contributionPic"
        />
      </label>
    <div style={{marginBottom: "20px"}}> 
          <button
          onClick={"hello"}
          class="comment-btn"
          type="button"
        >
          Edit Comment
        </button>
          <button
          onClick={"delete"}
          class="comment-btn"
          type="button"
        >
          Delete Comment
        </button>
        </div>
      </div>

      </div>
    );
  }
}

export default ContributionCard;
