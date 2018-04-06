import React, { Component } from 'react';

import { Card, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { fetchUrl, handleChange } from './actions';
import { connect } from 'react-redux';

const styles = {
  card: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    width: '25%',
    height: '40%',
    paddingTop: '10px'
  },
  button: {
    backgroundColor: '#22192f',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px'
  },
  textField: {
    marginBottom: '20px'
  }
}

class Input extends Component {
  render() {
    var { handleChange, fetchUrl } = this.props
    return (
      <div>
        <Card
          style={styles.card}>
        <CardTitle
          title="Url Shortener"/>
        <CardActions>
          <TextField
            hintText="Long Url"
            style={styles.textField}
            onChange={(e) => handleChange(e)}
          /><br />
          <RaisedButton
            label="Get Short Url"
            style={styles.button}
            onClick={() => fetchUrl(this.props.input)}
          />
        </CardActions>
        <a href={this.props.shortUrl} target="_blank">{this.props.shortUrl}</a>
      </Card>

      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchUrl: (shortUrl) => dispatch(fetchUrl(shortUrl)),
    handleChange: (input) => dispatch(handleChange(input))
  }
}

function mapStateToProps(state) {
  return {
    input: state.inputReducer.input,
    shortUrl: state.inputReducer.shortUrl
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Input);
