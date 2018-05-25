import React, { Component } from 'react';

import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const source = "https://kitt.lewagon.com/placeholder/cities/";
    if (this.props.activeCity) {
      return (
        <div className="active-city">
          <h3>{this.props.activeCity.name}</h3>
          <p>{this.props.activeCity.address}</p>
          <img alt={this.props.activeCity.name} src={source + this.props.activeCity.slug} width="100%" />
        </div>
      );
    } else {
      return ("Select a City...");
    };
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


export default connect(mapStateToProps, null)(ActiveCity);
