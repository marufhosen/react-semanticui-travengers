import React from "react";
import { Grid, Image, Statistic } from "semantic-ui-react";
import familyImage from "../../img/famili img.png";

import packageImg from "../../img/package.png";
import worldImg from "../../img/worldwide.png";
import travelGuideImg from "../../img/man.png";
import secureImg from "../../img/shield.png";

const WhyChooseUs = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "#EF5143" }}>Why Choose Us?</p>
        <h1>Every Time We Provide Best Service</h1>
      </div>
      <div style={{ padding: "80px" }}>
        <Grid>
          <Grid.Column mobile={16} tablet={12} computer={8}>
            <Image src={familyImage} fluid />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={8}>
            <Grid style={{ marginTop: "20px" }}>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <Image
                  src={packageImg}
                  size="tiny"
                  bordered
                  style={{ padding: "15px" }}
                  fluid
                />
                <h3>Exclusive Packages</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, maiores adipisicing elit.
                </p>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <Image
                  src={worldImg}
                  size="tiny"
                  bordered
                  style={{ padding: "15px" }}
                  fluid
                />
                <h3>World Class Service</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, maiores adipisicing elit.
                </p>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <Image
                  src={travelGuideImg}
                  size="tiny"
                  bordered
                  style={{ padding: "15px" }}
                  fluid
                />
                <h3>Best Travel Guide</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, maiores adipisicing elit.
                </p>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <Image
                  src={secureImg}
                  size="tiny"
                  bordered
                  style={{ padding: "15px" }}
                  fluid
                />
                <h3>100% Secure</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, maiores adipisicing elit.
                </p>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
      <div style={{margin:"30px"}}>
        <Statistic.Group widths={5}>
          <Statistic label="Travel" value="22" />
          <Statistic label="Signups" value="Three Thousand" />
          <Statistic label="Flights" value="5" />
          <Statistic label="Team Members" value="42" />
        </Statistic.Group>
      </div>
    </div>
  );
};

export default WhyChooseUs;
