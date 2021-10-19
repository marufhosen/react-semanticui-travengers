import React from "react";
import { Container, Icon, Menu } from "semantic-ui-react";

const TopNav = () => {
  return (
    <div style={{ backgroundColor: "#ffe9de" }}>
      <Container>
        <Menu secondary>
          <Menu.Item>mominurislam307@gmail.com</Menu.Item>
          <Menu.Item>+880 1831111111</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon style={{ fontSize: "25px" }} name="user circle"></Icon>My
              Account
            </Menu.Item>
            <Menu.Item>
              <Icon name="facebook"></Icon>
            </Menu.Item>
            <Menu.Item>
              <Icon name="twitter"></Icon>
            </Menu.Item>
            <Menu.Item>
              <Icon name="instagram"></Icon>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
};

export default TopNav;
