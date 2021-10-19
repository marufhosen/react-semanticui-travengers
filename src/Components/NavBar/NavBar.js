import React from "react";
import {
  Button,
  Dropdown,
  Icon,
  Input,
  Label,
  Menu,
  Segment,
} from "semantic-ui-react";

const NavBar = () => {
  return (
    <div>
      <Segment>
        <Menu secondary>
          <Menu.Item name="Home" />
          <Menu.Item name="Service" />
          <Menu.Item name="Gallary" />
          <Menu.Item name="Top Deals" />
          <Menu.Item>
            <Dropdown pointing text="Package">
              <Dropdown.Menu>
                <Dropdown.Item>Couple</Dropdown.Item>
                <Dropdown.Item>Friends</Dropdown.Item>
                <Dropdown.Item>Single</Dropdown.Item>
                <Dropdown.Item>Family</Dropdown.Item>
                <Dropdown.Item>Office</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item>
              <Icon name="heart"></Icon>
              <Label color="orange" floating>
                22
              </Label>
            </Menu.Item>
            <Menu.Item>
              <Icon name="cart"></Icon>
              <Label color="purple" floating>
                02
              </Label>
            </Menu.Item>
            <Menu.Item></Menu.Item>
            <Button color="orange">Login</Button>
          </Menu.Menu>
        </Menu>
      </Segment>
    </div>
  );
};

export default NavBar;
