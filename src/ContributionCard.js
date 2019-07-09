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
    );
  }
}

export default ContributionCard;
