import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="footerDiv" className="fixed-bottom">
      <div id="footerDiv">
        <Container>
          <div>Copyright © {year} Basketball Central. All Rights Reserved.</div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
