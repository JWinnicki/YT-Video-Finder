import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Input from './components/Input/Input';
import VideosList from './components/VideosList/VideosList';
import ShowVideo from './components/ShowVideo/ShowVideo';

class App extends React.Component {
  state={
    submited: false,
    videos: [],
    selectedId: null,
    selectedTitle: ''
  }
  
  onSubmit = videos => {
    this.setState({
      submited: true,
      videos: videos
    })
  }

  onGetId = (selectedId, title) => {
    this.setState({
      selectedId: selectedId,
      selectedTitle: title
    })
  }

  render(){
    return (
      <div className="App">
        <div className={`App-searchBar ${this.state.submited ? `App-searchBar--active` : ``}`}>
          <Input moveInput={this.onSubmit} />
        </div>
        <div className={`App-container ${this.state.submited ? `App-container--active` : ``}`}>
          <Switch>
            <Route path={`/show/:id`} component={props => <ShowVideo {...props} selectedId={this.state.selectedId} title={this.state.selectedTitle} videosList={this.state.videos} getId={this.onGetId} />} />
            <Route path="/" exact component={props => <VideosList {...props} videosList={this.state.videos} getId={this.onGetId} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
