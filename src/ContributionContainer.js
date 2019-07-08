import React, { Component } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

class ContributionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   fetch(CONTRIBUTIONS_URL)
  //     .then(resp => resp.json())
  //     .then(contributions => {
  //       //console.log(contributions)
  //       this.setState({ contributions: contributions });
  //     });
  // }

  render() {
    return (
      <div className="contribution">
        <h3>contribution Display:</h3>

        {/* <img src={ this.props.contributions[0].url}/>
        <p> {this.props.contributions[0].text }</p> */}
        
        <p>
          {this.props.contributions.length > 0
            ? this.props.contributions[0].text
            : "no contributions yet!"}
        </p>
        {/* <p>{this.props.contributions[0].text}</p> */}
        <img
          src={
            this.props.contributions.length > 0
              ? this.props.contributions[0].url
              : "no contributions yet!"
          }
          width="100"
        />
        
        
      </div>
    );
  }
}

export default ContributionContainer;

// CardExampleCard = () => (
//   <Card>
//     <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>Matthew</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2015</span>
//       </Card.Meta>
//       <Card.Description>
//         Matthew is a musician living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         22 Friends
//       </a>
//     </Card.Content>
//   </Card>
// )