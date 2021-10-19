import React from "react";
import { Button } from "semantic-ui-react";
import banner from "../../img/02.jpg";

const Banner = () => {
  return (
    <div className="ui fluid image">
      <img alt="u" style={{ opacity: 0.7 }} src={banner} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate( -50%, -50% )",
          textAlign: "center",
          color: "black",
        }}
      >
        <div>
          <h1>Welcome to Travengers</h1>
          <p>Tour to travel. A travel solution agency.</p>
          <Button inverted color="orange">Check It Out</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
