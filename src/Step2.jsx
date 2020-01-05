import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { Card, Alert } from "reactstrap";

import "./styles.css";

function Step2({ data, addStep, flagSet }) {
  console.log("data for selected", data[0]);
  const [result, setResult] = useState([]);
  const [country, setCountry] = useState("");

  console.log("result", result);
  const textChanged = e => {
    console.log("@@ KEYWORD", e.target.value);
    console.log("@@ RESULTS countries", listResults(e.target.value));
    setResult(listResults(e.target.value));
  };

  const listResults = keyword => {
    console.log("keyword", keyword);
    console.log("data list", data[0]);
    return data[0].countries.filter(obj => {
      keyword = keyword.toLowerCase();
      console.log("@@@ SEARCH", obj.name.toLowerCase().includes(keyword));
      return obj.name.toLowerCase().includes(keyword);
    });
  };
  const selectCountry = obj => {
    console.log("@@ clicked?", obj);
    setCountry(obj.name);
    addStep(2);
    flagSet(obj);
  };

  return (
    <Fragment>
      <Card body>
        <h3>Step 2</h3>
        <h5>Select a Country</h5>

        <input
          type="text"
          placeholder="Start Typing.."
          onChange={textChanged}
        />
        {result.map(country => (
          <h5 key={country.name} onClick={() => selectCountry(country)}>
            {country.name}
          </h5>
        ))}
        {country && <Alert color="success">YOU HAVE SELECTED: {country}</Alert>}
      </Card>
    </Fragment>
  );
}

export default Step2;
