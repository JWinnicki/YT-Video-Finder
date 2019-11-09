import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import Input from './components/Input/Input';
import VideosList from './components/VideosList/VideosList';
import ShowVideo from './components/ShowVideo/ShowVideo';

const App = props => {

  return (
    <div className="App">
      <div className={`App-searchBar ${props.videos.length > 0 || props.error ? `App-searchBar--active` : ``}`}>
        <Input />
      </div>
      <div className={`App-container ${props.videos.length > 0 || props.error ? `App-container--active` : ``}`}>
        <Switch>
          <Route path={`/show/:id`} component={ShowVideo} />
          <Route path="/" exact component={VideosList} />
        </Switch>
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    videos: state.videos,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);
