import React from 'react';
import { TextBlockLink } from '../components/core/Link';
import { LandingHeaderText } from '../components/core/Text';

function StoriesPage() {
  return (
    <div>
      <LandingHeaderText>
        This is the Stories page.
      </LandingHeaderText>
      <TextBlockLink to="/">Return to homepage.</TextBlockLink>
    </div>
  );
}

export default StoriesPage;
