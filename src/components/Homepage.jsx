import React from "react";
import millify from "millify";
import { Statistic, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24hrs Volume" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
