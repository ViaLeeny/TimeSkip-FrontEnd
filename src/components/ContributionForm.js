import React, { Component } from "react";
const CONTRIBUTIONS_URL = `http://localhost:3000/contributions/`;

class ContributionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formImage: "",
      formText: "",
      editContribution: false
    };
  }

  componentDidMount() {
    let contra = this.props.contributionToEdit;
    //this.props.toggleForm(true);
    if (contra) {
      this.setState({ formImage: contra.url, formText: contra.text });
      this.setState({editContribution: true})
    }
  }

  isValidImageUrl = url => {};

  currentUser = () => {
    return 1;
  };

  postContribution = (event, editContribution) => {
    event.preventDefault();
    let contributionToEdit = this.props.contributionToEdit
    let fetchMethod = editContribution ? "PATCH" : "POST";
    let contributionId = contributionToEdit? contributionToEdit.id: null;

    let urlContributionId = contributionId ? contributionId : "";
    alert(urlContributionId);

    let headers = {
      "Content-Type": "application/json",
      Accepts: "application/json"
    };
   
    let formImage = this.state.formImage;
    let formText = this.state.formText;
    let event_id = this.props.event.id;
    let user_id = 1;
    console.log(formImage);
    console.log(formText);

    return fetch(CONTRIBUTIONS_URL + urlContributionId, {
      method: fetchMethod,
      headers: headers,
      body: JSON.stringify({
        url: formImage,
        text: formText,
        event_id: event_id,
        user_id: this.currentUser()
      })
    }).then(res => {
      this.props.toggleForm();
      this.props.fetchContributions();
      this.setState({editContribution: false, formImage: "", formText: ""})
      return res.json();
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    // event.persist();
    //console.log(event);
  };

  render() {
    let formImage = this.state.formImage;
    let formText = this.state.formText;
    let editContribution = this.state.editContribution;

    return (
      <form onSubmit={event => this.postContribution(event, editContribution)}>
        <div>
          <label for="contribution-url" />
          <input
            type="text"
            id="formImage"
            className="contribution-url"
            name="url"
            value={formImage === "" ? "" : `${formImage}`}
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
            value={formText === "" ? "" : `${formText}`}
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
