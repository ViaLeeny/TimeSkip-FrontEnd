import React, { Component } from "react";
import uniqueId from "react-html-id";
const CONTRIBUTIONS_URL = `http://localhost:3000/contributions/`;

class ContributionCard extends Component {
  constructor() {
    super();
    uniqueId.enableUniqueIds(this);
  }

  deleteContribution = () => {
    let cont_id = this.props.contribution.id;
    let headers = {
      "Content-Type": "application/json",
      Accepts: "application/json"
    };

    return fetch(CONTRIBUTIONS_URL + cont_id, {
      method: "DELETE",
      headers: headers
    }).then(res => {
      console.log(res);
      this.props.fetchContributions();
      return res.json();
    });
  };

  // postContribution = event => {
  //   let headers = {
  //     "Content-Type": "application/json",
  //     Accepts: "application/json"
  //   };
  //   event.preventDefault();
  //   let formImage = this.state.formImage;
  //   let formText = this.state.formText;
  //   let event_id = this.props.event.id;
  //   let user_id = 1;
  //   console.log(formImage);
  //   console.log(formText);

  //   return fetch(CONTRIBUTIONS_URL, {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify({
  //       url: formImage,
  //       text: formText,
  //       event_id: event_id,
  //       user_id: this.currentUser()
  //     })
  //   }).then(res => {

  //     this.props.toggleForm()
  //     this.props.fetchContributions()
  //     return res.json()});
  // };

  render() {
    return (
      <div className="rowC">
        <div className="comment-container">
          <p className="comment" id={this.lastUniqueId()}>
            {this.props.contribution.text}
          </p>
          <label htmlfor={this.nextUniqueId()}>
            <img
              alt={this.props.contribution.id}
              src={this.props.contribution.url}
              onError="this.onerror=null; this.src='/images/noimage.gif';"
              className="contributionPic"
            />
          </label>
          <div style={{ marginBottom: "20px" }}>
            <button
              onClick={event => console.log("Please add edit function")}
              class="comment-btn"
              type="button"
            >
              Edit Comment
            </button>
            <button
              onClick={event => this.deleteContribution()}
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
