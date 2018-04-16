import React from "react";
import { Layout } from "antd";
import Header from "./components/Header";

const Master = props => {
  return (
    <Layout>
      <Header />
      <Layout.Content> {props.children}</Layout.Content>
    </Layout>
  );
};

export default Master;
