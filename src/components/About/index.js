import React from 'react';
import classNames from 'classnames';
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';

import Work from '@material-ui/icons/Work';
import School from '@material-ui/icons/School';
import { Code } from 'styled-icons/fa-solid/Code';

import GridContainer from '../Grid/GridContainer.jsx';
import GridItem from '../Grid/GridItem.jsx';
import Button from '../CustomButtons/Button.jsx';
import NavPills from '../NavPills/NavPills.jsx';

import Card from '../Card/Card.jsx';
import CardHeader from '../Card/CardHeader.jsx';
import CardBody from '../Card/CardBody.jsx';
import Divider from '@material-ui/core/Divider';
import image from '../../assets/images/Tejaswini.JPG';
import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage';
import { Html5 } from 'styled-icons/fa-brands/Html5';
import { Css3Alt } from 'styled-icons/fa-brands/Css3Alt';
import { Js } from 'styled-icons/fa-brands/Js';
import { Node } from 'styled-icons/fa-brands/Node';
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';
import { Github } from 'styled-icons/fa-brands/Github';
import redux from '../../assets/images/redux.png';
import saga from '../../assets/images/redux-saga.png';
import router from '../../assets/images/router.png';
import mysql from '../../assets/images/mysql.png';
import java from '../../assets/images/java.png';
import cpp from '../../assets/images/cpp.png';
import GraphQL from '../../assets/images/GraphQL.png';

const About = props => {
  const { classes } = props;
  const skillsStyle = {
    placement: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
  };
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return <div className={classNames(classes.main, classes.mainRaised)}>
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={image} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h1 className={classes.title}>Tejaswini Kosunam</h1>
                  <h3>UI Developer</h3>
                  <Button justIcon link className={classes.margin5} href="https://github.com/Tejaswini515" target="_blank">
                    <i className={'fab fa-github'} />
                  </Button>
                <Button justIcon link className={classes.margin5} href="https://www.linkedin.com/in/tejaswinikosunam/" target="_blank">
                    <i className={'fab fa-linkedin'} />
                  </Button>
                <Tooltip title="mailto : tejaswini.kosunam@usm.edu">
                  <Button justIcon link className={classes.margin5} href="mailto:tejaswini.kosunam@usm.edu">
                    <i className={'fa fa-envelope'} />
                  </Button>
                </Tooltip> 
                <Tooltip title="phone number : (601) 307-0774">
                  <Button justIcon link className={classes.margin5} href="tel:6013070774">
                    <i className={'fa fa-phone-square'} />
                  </Button>
                  </Tooltip>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>
              My passion as an engineer lies in developing easy to use,
              user-friendly web applications with Open Source technologies
              dealing with real world problems.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>;
};

export default withStyles(profilePageStyle)(About);
