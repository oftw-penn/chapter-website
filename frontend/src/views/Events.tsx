import React from 'react';
import { TextBlockLink } from '../components/core/Link';
import { LandingHeaderText } from '../components/core/Text';

function EventsPage() {
  return (
    <div>
      <LandingHeaderText>
        This is the Events page.
      </LandingHeaderText>
      <TextBlockLink to="/">Return to homepage.</TextBlockLink>
    </div>
  );
}

export default EventsPage;
