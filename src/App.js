import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import NavBar from './components/NavBar';
import { Router } from '@reach/router'
import ArticleList from './components/ArticleList';
import Article from './components/Article'

class App extends Component {

  state = {
    currentUser: 'weegembump',
  }

  render() {
    const { currentUser } = this.state
    return (
      <div>
        <Title user={currentUser} />
        <NavBar />
        <Router>
          <ArticleList path='/' />
          <ArticleList path='/articles' />
          <ArticleList path='/articles/:topic' />
          <Article path='/article/:article_id' user={currentUser} />
        </Router>
      </div>
    );
  }
}

export default App;