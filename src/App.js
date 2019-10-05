import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Input from './components/Input/Input';
import VideosList from './components/VideosList/VideosList';
import ShowVideo from './components/ShowVideo/ShowVideo';
import { VideosContext } from './context/videos-context';

/* class App extends React.Component {
  state={
    submited: false
  }
  
  onSubmit = () => {
    this.setState({
      submited: true
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
            <Route path={`/show/:id`} component={ShowVideo} />
            <Route path="/" exact component={VideosList} />
          </Switch>
        </div>
      </div>
    );
  }
} */

const App = () => {
  const { videos } = useContext(VideosContext);


  return (
    <div className="App">
      <div className={`App-searchBar ${videos.length > 0 ? `App-searchBar--active` : ``}`}>
        <Input />
      </div>
      <div className={`App-container ${videos.length > 0 ? `App-container--active` : ``}`}>
        <Switch>
          <Route path={`/show/:id`} component={ShowVideo} />
          <Route path="/" exact component={VideosList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
