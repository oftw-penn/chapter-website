import React from 'react';
import { TextBlockLink } from '../components/core/Link';
import { LandingHeaderText } from '../components/core/Text';

function TeamPage() {
  return (
    <div>
      <LandingHeaderText>
        This is the Team page.
      </LandingHeaderText>
      <TextBlockLink to="/">Return to homepage.</TextBlockLink>
    </div>
  );
}

export default TeamPage;
