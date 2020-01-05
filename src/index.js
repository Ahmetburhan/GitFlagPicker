import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import "./styles.css";

function App() {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [flagData, setFlagData] = useState([]);

  const addStep = step => {
    setCompletedSteps([...completedSteps, step]);
  };

  const countrySet = data => {
    console.log("data here", data);
    setCountryData([...countryData, data]);
  };

  const flagSet = flag => {
    console.log("flag here", flag);
    setFlagData([...flagData, flag]);
  };

  const handleReset = () => {
    console.log("resetted");
    setCompletedSteps([]);
  };

  return (
    <Fragment>
      <Container>
        <Row className="header">
          <Col>
            <h3>Flag Picker</h3>
            <h5>This App will help you to Learn Flags</h5>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            {<Step1 addStep={addStep} countrySet={countrySet} />}
          </Col>
          <Col sm="4">
            {completedSteps.includes(1) && (
              <Step2 addStep={addStep} data={countryData} flagSet={flagSet} />
            )}
          </Col>
          <Col sm="4">
            {completedSteps.includes(2) && (
              <Step3 data={flagData} handleReset={handleReset} />
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
