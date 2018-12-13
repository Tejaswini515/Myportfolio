import React, { Component } from 'react';
import WorkPage from '../../components/WorkPage';
import About from '../../components/About';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

class Main extends Component {
  render() {
    return (
      <div>
        <GridContainer style={{display:"flex"}}>
          <GridItem>
            <About/>
          </GridItem>
          <GridItem>
            <WorkPage/>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default Main;
