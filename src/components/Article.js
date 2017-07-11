import React, {Component} from 'react';
import {Rating, Item, Label} from 'semantic-ui-react';

export default function Article(props) {
  console.log(props);
  let {title, description, tags} = props.data;
  let counter = 0;

  return (
      <Item>
        <Item.Image size="small"
                    src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />

        <Item.Content>
          <Item.Header as='a'>{title}   </Item.Header>
          <Rating maxRating={5} defaultRating={4} icon='star' size='mini' />
          <Item.Description>{description}</Item.Description>
            <Item.Extra>
              {tags.map((tag) => {
                <Label key={counter++} content={tag}/>
              })
              }
            </Item.Extra>
        </Item.Content>
      </Item>
  );
}
