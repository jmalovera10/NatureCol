import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import HomeContainer from "../pages/home/homeContainer";

/*
  Componente que realiza el manejo de Paginas
*/
export default class MainView extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Switch>
        <Route exact path='/' name='homePage' render={(props) => <HomeContainer {...props} />} />
      </Switch>
    )
  }
}

MainView.propTypes = {
  currentUser: PropTypes.object
}