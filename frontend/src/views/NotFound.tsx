import React from 'react';
import { TextBlockLink } from '../components/core/Link';
import { LandingHeaderText } from '../components/core/Text';
import { Box, Grommet, Heading } from 'grommet';

function NotFound() {
  return (
    <div>
      <LandingHeaderText>
        Uh oh! Page not found (404 error).
      </LandingHeaderText>
      <TextBlockLink to="/">
        Click here to return to home &#8594;
      </TextBlockLink>
      <Heading>hi!</Heading>
      <Box
        direction="row"
        border={{ color: 'brand', size: 'large' }}
        pad="medium"
        width="small"
      >
        <Box pad="small" background="dark-3" />
        <Box pad="medium" background="light-3" />
      </Box>
    </div>
  );
}

export default NotFound;
