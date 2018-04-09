import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { Card, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { fetchUrl, handleChange, getUserDetails } from './actions';
import { connect } from 'react-redux';
import Details from '../Details/Details';

const styles = {
  card: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    width: '25%',
    height: '50%',
    paddingTop: '10px'
  },
  button: {
    backgroundColor: '#22192f',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    marginTop: '10px'
  },
  textField: {
    marginBottom: '5px'
  }
}

class Input extends Component {
  constructor(props){
    super();
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(){
    this.props.history.push("/details");
  }

  render() {
    var { handleChange, fetchUrl, getUserDetails } = this.props
    return (
      <div>
        <Card
          style={styles.card}>
        <CardTitle
          title="URL Shortener"/>
        <CardActions>
          <p>Please type http:// before url</p>
          <TextField
            hintText="http://google.com"
            style={styles.textField}
            onChange={(e) => handleChange(e)}
          /><br />
          <RaisedButton
            label="Get Short URL"
            style={styles.button}
            onClick={() => fetchUrl(this.props.input)}
          />
        </CardActions>
        <a
          href={this.props.shortUrl}
          target="_blank"
          onClick={() => getUserDetails()}>
          {this.props.shortUrl}
        </a>
        { this.props.showButton ?
          <RaisedButton
            label="Get Details"
            style={styles.button}
            onClick={() => this.showDetails()}/>
          : null
        }

      </Card>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchUrl: (shortUrl) => dispatch(fetchUrl(shortUrl)),
    handleChange: (input) => dispatch(handleChange(input)),
    getUserDetails: () => dispatch(getUserDetails())
  }
}

function mapStateToProps(state) {
  return {
    input: state.inputReducer.input,
    shortUrl: state.inputReducer.shortUrl,
    details: state.inputReducer.details,
    showButton: state.inputReducer.showButton
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Input));
