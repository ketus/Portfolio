import React, {Component} from 'react';
import {Card, Image} from 'semantic-ui-react';

let Data = [].push(new Date());
const image = 'http://react.semantic-ui.com/assets/images/avatar/large/matthew.png';

export default function Avatar(props) {
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>
          {props.id}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            Joined in {Data}
          </span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

