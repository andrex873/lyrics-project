import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './pages/index';
import LyricsCreate from './pages/lyrics/create';

class App extends Component {

  render () {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' component={Index} exact />
                <Route path='/lyrics/create' component={LyricsCreate} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
