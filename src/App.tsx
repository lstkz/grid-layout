import React from 'react';
import styled from 'styled-components';
import { Col } from './Col';
import { Row } from './Row';

interface AppProps {
  className?: string;
}

const Content1 = styled.div`
  width: 100%;
  height: 50px;
  background: peachpuff;
`;

const Content2 = styled.div`
  width: 100%;
  height: 50px;
  background: blueviolet;
`;
const Content3 = styled.div`
  width: 100%;
  height: 50px;
  background: goldenrod;
`;

const _App = (props: AppProps) => {
  const { className } = props;
  return (
    <div className={className}>
      <Row gutter={0}>
        <Col md={6} lg={4}>
          <Content1 />
        </Col>
        <Col md={6} lg={4}>
          <Content2 />
        </Col>
        <Col md={12} lg={4}>
          <Content3 />
        </Col>
      </Row>
    </div>
  );
};

export const App = styled(_App)`
  max-width: 1200px;
  margin: 30px auto;
  border: 2px solid black;
  padding: 30px;
`;
