import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ArticleList, {Article} from '../components/ArticleList';

let articles = [
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
];

export default class Blog extends Component {

  render() {
    return (
      <div>
        <h1>Blog</h1>
        <ArticleList articles={articles} />
      </div>
    );
  }
}
