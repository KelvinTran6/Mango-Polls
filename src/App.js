import React from 'react';
import Main from './Main'
import Navbar from './components/Navbar'
import Creation from './components/Creation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/Creation" component={Creation} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;