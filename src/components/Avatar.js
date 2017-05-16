import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default class Avatar extends Component {
  render(){
    return (
      <Card raised>
        <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>
            Matthew
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2017
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
};
