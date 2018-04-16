import React from "react";
import { Layout, Menu, Icon, Button } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const style = {
  logo: {
    width: "120px",
    height: "31px",
    background: "rgba(255,255,255,.2)",
    margin: "16px 28px 16px 0",
    float: "left"
  }
};
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "mail"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  }

  render() {
    return (
      <Layout.Header>
        <div className="logo">Project</div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
        </Menu>
        <Button type="danger">Danger</Button>
      </Layout.Header>
    );
  }
}
