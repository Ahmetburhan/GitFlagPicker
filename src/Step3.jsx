import React, { useState, useEffect, Fragment } from "react";
import { Card, Button } from "reactstrap";

import "./styles.css";

function Step3({ data, handleReset }) {
  console.log("flagdata", data);
  const handleClick = () => {
    console.log("i got clicked");
    handleReset();
  };
  return (
    <Fragment>
      <Card body>
        <h3>Step 3</h3>
        <div>
          <h2>{data[0].name}</h2>
          <p style={{ fontSize: "5rem" }}>{data[0].flag}</p>
        </div>
        <Button color="danger" onClick={() => handleClick()}>
          Reset
        </Button>
      </Card>
    </Fragment>
  );
}

export default Step3;
