import React from 'react';
import { TextBlockLink } from '../components/core/Link';
import { LandingHeaderText } from '../components/core/Text';

function LandingPage() {
  return (
    <div>
      <LandingHeaderText>
        Welcome to OFTW @ Penn!
      </LandingHeaderText>
      <TextBlockLink to="/alumni">Alumni</TextBlockLink>
      <TextBlockLink to="/events">Events</TextBlockLink>
      <TextBlockLink to="/mission">Mission</TextBlockLink>
      <TextBlockLink to="/Projects">Projects</TextBlockLink>
      <TextBlockLink to="/Stories">Stories</TextBlockLink>
      <TextBlockLink to="/Team">Team</TextBlockLink>
    </div>
  );
}

export default LandingPage;
