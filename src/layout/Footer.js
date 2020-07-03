import React from "react";

import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-primary text-white text-uppercase fixed-bottom p-3"
    >
      Github search App with Firebase
      <br />
      <span> By Salman</span>
    </Container>
  );
};

export default Footer;
