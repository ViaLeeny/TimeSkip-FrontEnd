import React, { Component } from "react";
import ContributionCard from "./ContributionCard";
//import { Card, Icon, Image } from 'semantic-ui-react'

class ContributionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   const filteredEventContributions = () => {
  //     console.log("here are all contributions");
  //     console.log(this.props.contributions);

  //     let eventContributions = this.props.contributions.map(
  //       contribution => contribution.event_id === this.props.event.id
  //     );
  //     //debugger;

  //     this.setState({ filteredContributions: eventContributions });
  //   };
  // }

  render() {
    return (
      <div className="contribution">
        <h3>Contribution Container:</h3>

        <p>
          {this.props.contributions.map(cont => {
            return <ContributionCard contribution={cont} />;
          })}
        </p>
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
