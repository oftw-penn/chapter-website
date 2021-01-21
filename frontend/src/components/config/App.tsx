import React from 'react';
import { Switch } from 'react-router-dom';
import MainLayout from '../layout/Main';
import LandingPage from '../../views/Landing';
import NotFound from '../../views/NotFound';
import CustomRoute from './Route';
import EventsPage from '../../views/Events';
import ProjectsPage from '../../views/Projects';
import MissionPage from '../../views/Mission';
import StoriesPage from '../../views/Stories';
import AlumniPage from '../../views/Alumni';
import TeamPage from '../../views/Team';

function App() {
  return (
    <Switch>
      <CustomRoute path="/" component={LandingPage} layout={MainLayout} exact />
      <CustomRoute path="/events" component={EventsPage} layout={MainLayout} exact />
      <CustomRoute path="/projects" component={ProjectsPage} layout={MainLayout} exact />
      <CustomRoute path="/mission" component={MissionPage} layout={MainLayout} exact />
      <CustomRoute path="/alumni" component={AlumniPage} layout={MainLayout} exact />
      <CustomRoute path="/team" component={TeamPage} layout={MainLayout} exact />
      <CustomRoute path="/stories" component={StoriesPage} layout={MainLayout} exact />
      <CustomRoute path="*" component={NotFound} layout={MainLayout} />
    </Switch>
  );
}

export default App;
