import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects';
import bgImg from '../../assets/images/bg3.jpeg';

const myStyles = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: '100% 100%'

}
class Portfolio extends Component {
  render() {
    return (
      <div style={myStyles}>
        <NavBar />
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route exact path="/" component={AboutMe} />
            <Redirect to="/" />
          </Switch>
      </div>
    );
  }
}

export default Portfolio;
