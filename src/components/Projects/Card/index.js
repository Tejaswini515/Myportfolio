import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '../../Card/Card.jsx';
import CardBody from '../../Card/CardBody.jsx';
import CardHeader from '../../Card/CardHeader.jsx';
import Divider from '@material-ui/core/Divider';
import Button from '../../CustomButtons/Button.jsx';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 345,
    marginTop: 90,
    marginBottom: 90,
    marginLeft:40,
    marginRight: 40
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10
  }
});

function SimpleMediaCard(props) {
  const { classes } = props;
  return <div>
      <Card className={classes.card}>
        <CardHeader color="success">{props.title}</CardHeader>
        <CardBody>
          <Typography gutterBottom component="p">
            {props.description}
          </Typography>
          <Divider />
          <Typography gutterBottom variant="subheading" color="secondary">
            Technologies
          </Typography>
          <div className={classes.controls}>{props.technologies}</div>
          <Divider />
          <Button type="button" color="primary" simple>
            <a href={props.srcLink} target="_blank" style={{ color: '#9c27b0', textDecoration: 'none' }}>
              Code
            </a>
          </Button>
        </CardBody>
      </Card>
    </div>;
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
