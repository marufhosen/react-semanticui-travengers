import React from "react";
import { Grid, Image } from "semantic-ui-react";
import flight from "../../img/flight.jpg";
import hotel from "../../img/hotel.jpg";
import ticket from "../../img/ticket.jpg";
import tour from "../../img/tour.jpg";

const Services = () => {
  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <Grid columns="four">
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div>
              <Image src={flight} circular size="small" bordered centered />
              <div style={{ padding: "20px" }}>
                <h3>Flight Booking</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Atque molestiae, cum iste labore
                </p>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div>
              <Image src={hotel} circular size="small" bordered centered />
              <div style={{ padding: "20px" }}>
                <h3>Ticket Booking</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Atque molestiae, cum iste labore
                </p>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div>
              <Image src={ticket} circular size="small" bordered centered />
              <div style={{ padding: "20px" }}>
                <h3>Amazing Tour</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Atque molestiae, cum iste labore
                </p>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div>
              <Image src={tour} circular size="small" centered />
              <div style={{ padding: "20px" }}>
                <h3>Hotel Booking</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Atque molestiae, cum iste labore
                </p>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Services;
