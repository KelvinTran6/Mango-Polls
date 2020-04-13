import React from 'react';
import Main from './Main'
import Navbar from './components/Navbar'
import Browse from './components/Browse'
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
                    <Route path = "/Browse" component = {Browse}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;