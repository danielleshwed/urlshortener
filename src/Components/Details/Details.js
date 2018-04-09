import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { Card, CardActions, CardTitle } from 'material-ui/Card';

const styles = {
  card: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    width: '50%',
    height: '100%',
    paddingTop: '10px',
    overflow: 'auto'
  },
}

class Details extends Component {
  render() {
      return (
        <div>
          <Card
            style={styles.card}>
          <CardTitle
            title="URL Shortener"/>
          {
            this.props.details.map((detail) => {
              return(
                <div>
                  <h3>IP</h3>
                  <p>{detail.ip}</p>
                  <h3>Browser</h3>
                  <p>{detail.browser}</p>
                  <h3>Date</h3>
                  <p>{detail.date}</p>
                </div>
              )
            })
          }
        </Card>
        </div>
      );
  }
}

export function mapDispatchToProps(dispatch) {
  return {}
}

function mapStateToProps(state) {
  return {
    clicks: state.inputReducer.input,
    details: state.inputReducer.details
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Details));
