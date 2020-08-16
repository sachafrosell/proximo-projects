/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

const aStyle = {
  fontSize: "10px",
  textAlign: "center",
  opacity: "70%"
}

function DarkFooter() {
  return (
    <footer style={{background: "#a7a7a7", color: "white", padding: "8px", textAlign: "center", justifyContent: "center"}}>

      <Container style={{textAlign: "center", justifyContent: "center"}}>

        <div className="copyright" id="copyright" style={aStyle}>
          © {new Date().getFullYear()}, Proximo Projects


        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
