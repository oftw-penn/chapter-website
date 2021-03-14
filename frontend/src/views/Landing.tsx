import { Carousel, Card, Grid, Box, Image, CardHeader, CardBody, CardFooter } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { TextBlockLink } from '../components/core/Link';
import { LandingHeaderText, LargeText, Text } from '../components/core/Text';
import { AiFillCaretRight } from "react-icons/ai";

const Content = styled.div`
  padding: 0px 10vw;
  text-align: left;
`;

const AdditionalMargin = styled.div`
  padding: 0px 15vw;
`;

const Section = styled.div`
  padding: 0vh 0vw 20vh 0vw;
`;

const DarkSection = styled.div`
  padding: 4vh 2vw;
  background-color: #D6D6D6;
  border-radius: 15px;
`;

const DarkButton = styled.button`
  background-color: #6B6B6B;
  color: white;
  font-size: medium;
  border-radius: 6px;
  padding: 0.5vh 1vw;
  border: none;
`;

const LightButton = styled.button`
  background-color: transparent;
  color: default;
  font-size: medium;
  padding: 0.5vh 1vw;
  border: none;
`;

function LandingPage() {
  return (
    <Content>
        <AdditionalMargin>
          <Section>
            <LandingHeaderText>
                We have a mission statement sentence here.
            </LandingHeaderText>
            <Text>
              There is text here. it is talking about the mission statement.
              The wording is very eloquent and cool. People are super interested
              in what the text is saying. So cool.
            </Text>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <DarkButton>Learn more</DarkButton>
            </div>
          </Section>
        </AdditionalMargin>
        <Section>
          <LargeText className='landing-page-section-header'>
            Events
          </LargeText>
          <Carousel fill={false} alignSelf="center" controls="arrows" margin="medium">
            <Grid gap="medium" columns={{ count: 'fit', size: 'small' }}>
              <Card height="medium" width="medium">
                <CardHeader pad="medium">
                  Very Important Event
                </CardHeader>
                <CardBody pad="medium">
                  This is a summary of the very important event and why you 
                  should totally go.
                </CardBody>
                <CardFooter pad="medium">
                  <div>
                    <p>Date: 1/1/2021</p>
                    <p>Time: 1AM</p>
                    <p>Place: under the button</p>
                  </div>
                </CardFooter>
              </Card>
              <Card height="medium" width="medium">
                <CardHeader pad="medium">
                  Very Important Event
                </CardHeader>
                <CardBody pad="medium">
                  This is a summary of the very important event and why you 
                  should totally go.
                </CardBody>
                <CardFooter pad="medium">
                  <div>
                    <p>Date: 1/1/2021</p>
                    <p>Time: 1AM</p>
                    <p>Place: under the button</p>
                  </div>
                </CardFooter>
              </Card>
              <Card height="medium" width="medium">
                <CardHeader pad="medium">
                  Very Important Event
                </CardHeader>
                <CardBody pad="medium">
                  This is a summary of the very important event and why you 
                  should totally go.
                </CardBody>
                <CardFooter pad="medium">
                  <div>
                    <p>Date: 1/1/2021</p>
                    <p>Time: 1AM</p>
                    <p>Place: under the button</p>
                  </div>
                </CardFooter>
              </Card>
            </Grid>
          </Carousel>
        </Section>
        <AdditionalMargin>
          <Section>
            <LargeText style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              What We're Working On
            </LargeText>
            <Card pad="medium">
              <CardHeader pad="medium">
                Cool Project Name
              </CardHeader>
              <CardBody pad="medium">
                This is what the project is about. It is really cool stuff. 
                Everyone will read every single word of this description
                because it's so captivating. Wow look at all this information.
                This project is going so well. I am running out of words to put
                in order to adequately fill this space. These are more words that
                I am including because we will probably write a lot more about
                this project because it's just that cool.
              </CardBody>
              <CardFooter style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <DarkButton>Learn more</DarkButton>
              </CardFooter>
            </Card>
            <Card pad="medium">
              <CardHeader pad="medium">
                Cool Project Name
              </CardHeader>
              <CardBody pad="medium">
                This is what the project is about. It is really cool stuff. 
                Everyone will read every single word of this description
                because it's so captivating. Wow look at all this information.
                This project is going so well. I am running out of words to put
                in order to adequately fill this space. These are more words that
                I am including because we will probably write a lot more about
                this project because it's just that cool.
              </CardBody>
              <CardFooter style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <DarkButton>Learn more</DarkButton>
              </CardFooter>
            </Card>
            <Card pad="medium">
              <CardHeader pad="medium">
                Cool Project Name
              </CardHeader>
              <CardBody pad="medium">
                This is what the project is about. It is really cool stuff. 
                Everyone will read every single word of this description
                because it's so captivating. Wow look at all this information.
                This project is going so well. I am running out of words to put
                in order to adequately fill this space. These are more words that
                I am including because we will probably write a lot more about
                this project because it's just that cool.
              </CardBody>
              <CardFooter style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <DarkButton>Learn more</DarkButton>
              </CardFooter>
            </Card>
          </Section>
        </AdditionalMargin>
        <DarkSection>
            <Grid gap="medium" columns={{ count: 'fit', size: 'small' }}>
              <div>
                <div>
                  <LargeText>
                    Fellowship
                  </LargeText>
                  <p>
                    Are you curious about Effective Altruism? Wanna know more stuff?
                    We have some useful resources that can help you. We're going to 
                    explain some of that right here. But not all of it because we have 
                    a whole page on it. So if you're interested you gotta click the button.
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
                  <LightButton>Learn more</LightButton>
                  <AiFillCaretRight />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image src="https://app.effectivealtruism.org/logo.svg"/>
              </div>
            </Grid>
        </DarkSection>
        <div>
          <TextBlockLink to="/alumni">Alumni</TextBlockLink>
          <TextBlockLink to="/events">Events</TextBlockLink>
          <TextBlockLink to="/mission">Mission</TextBlockLink>
          <TextBlockLink to="/Projects">Projects</TextBlockLink>
          <TextBlockLink to="/Stories">Stories</TextBlockLink>
          <TextBlockLink to="/Team">Team</TextBlockLink>
        </div>
    </Content>
  );
}

export default LandingPage;
