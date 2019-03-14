import React, {Component} from 'react';

import {Switch, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./containers/Home/Home";

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
