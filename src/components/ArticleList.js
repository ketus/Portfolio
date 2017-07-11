import React, {Component} from 'react';
import {Item } from 'semantic-ui-react';
import Article from './Article';

export default function ArticleList(props) {
  return (
      <Item.Group divided>
        <Article data={props.articles[0]}/>
        { props.articles.map((post) => {
          <Article data={post}/>
        })
        }
      </Item.Group>
  );
}

ArticleList.defaultProps = {
  articles: [
    {
      title: 'wat',
      description: 'wat wat description',
      tags: ['javascript', 'node', 'wattttt'],
    },
    {
      title: 'Not wat',
      description: 'wat wat description 2',
      tags: ['python', 'C++', 'notheeeeeng'],
    },
  ],
};


