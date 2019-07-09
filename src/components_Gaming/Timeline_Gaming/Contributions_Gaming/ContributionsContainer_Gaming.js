import React, { Component } from "react";
import ContributionCard_Gaming from "./ContributionCard_Gaming";
//import { Card, Icon, Image } from 'semantic-ui-react'

class ContributionContainer_Gaming extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contribution">
        
       { this.props.contributions.length > 0 
       ? <div> <h3>Contribution Container:</h3></div> 
        : null
        }
            <p>
                {this.props.contributions.map(cont => {
                    return <ContributionCard_Gaming contribution={cont} />;
                })}
            </p>
      </div>
    );
  }
}

export default ContributionContainer_Gaming;