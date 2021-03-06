import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const navBar = props => {
  const { classes } = props;
  return <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#056D8E'}}>
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            About
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" href="http://orca.st.usm.edu/~tkosunam/TejaswiniKosunam.pdf" target="_blank" download>
            Resume
          </Button>
        </Toolbar>
      </AppBar>
    </div>;
};

export default withStyles(styles)(navBar);
