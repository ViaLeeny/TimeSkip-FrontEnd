import React, { Component } from "react";
const CONTRIBUTIONS_URL = `http://localhost:3000/contributions/`;

class ContributionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formImage: "",
      formText: ""
    };
  }

  isValidImageUrl = url => {};

  currentUser = () => {
    return 1;
  };

  postContribution = event => {
    let headers = {
      "Content-Type": "application/json",
      Accepts: "application/json"
    };
    event.preventDefault();
    let formImage = this.state.formImage;
    let formText = this.state.formText;
    let event_id = this.props.event.id;
    let user_id = 1;
    console.log(formImage);
    console.log(formText);

    return fetch(CONTRIBUTIONS_URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        url: formImage,
        text: formText,
        event_id: event_id,
        user_id: this.currentUser()
      })
    }).then(res => {
      
      this.props.toggleForm()
      this.props.fetchContributions()
      return res.json()});
  };

  // login = (username, password) => {
  //   return fetch(`${API_BASE_URL}/auth/create`, {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify({ username, password })
  //   }).then(res => res.json());
  // };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    // event.persist();
    //console.log(event);
  };

  render() {
    return (
      <form onSubmit={event => this.postContribution(event)}>
        <div>
          <label for="contribution-url" />
          <input
            type="text"
            id="formImage"
            className="contribution-url"
            name="url"
            placeholder="Paste an image url here"
            onChange={event => this.handleChange(event)}
          />
        </div>
        <div>
          <label for="contribution-text" />
          <textarea
            autofocus
            id="formText"
            className="contribution-text"
            rows="4"
            cols="50"
            maxlength="140"
            placeholder="Comment Here"
            onChange={event => this.handleChange(event)}
          />
        </div>
        <div>
          <input className={"submit-btn"} type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default ContributionForm;

///action="/action_page.php"
