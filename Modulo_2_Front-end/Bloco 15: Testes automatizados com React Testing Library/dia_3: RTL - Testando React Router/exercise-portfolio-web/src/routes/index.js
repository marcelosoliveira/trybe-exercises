import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About, Contact, Home, NotFound, Projects } from '../pages';

const Routes = () => (
  <Switch>
    <Route path="/projects" component={ Projects } />
    <Route path="/contact" component={ Contact } />
    <Route path="/about" component={ About } />
    <Route exact path="/" component={ Home } />
    <Route path="*" component={ NotFound } />
  </Switch>
);

export default Routes;
