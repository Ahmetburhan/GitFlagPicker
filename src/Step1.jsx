import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import data from "./../data/data";
import { Card, Alert } from "reactstrap";
import "./styles.css";

function Step1({ addStep, countrySet }) {
  const [result, setResult] = useState([]);
  const [continent, setContinent] = useState("");

  console.log("@@@ DATA.", data);

  const textChanged = e => {
    console.log("@@ KEYWORD", e.target.value);
    console.log("@@ RESULTS", listResults(e.target.value));
    setResult(listResults(e.target.value));
  };

  const listResults = keyword => {
    return data.filter(obj => {
      keyword = keyword.toLowerCase();
      console.log("@@@ SEARCH", obj.continent.toLowerCase().includes(keyword));
      return obj.continent.toLowerCase().includes(keyword);
    });
  };

  const selectContinent = obj => {
    console.log("@@ clicked?", obj);
    setContinent(obj.continent);
    addStep(1);
    countrySet(obj);
  };

  return (
    <Fragment>
      <Card body>
        <h3>Step 1</h3>
        <h5>Select a Continent</h5>

        <input
          type="text"
          placeholder="Start Typing.."
          onChange={textChanged}
        />
        {result.map(country => (
          <h5 key={country.continent} onClick={() => selectContinent(country)}>
            {country.continent}
          </h5>
        ))}
        {continent && (
          <Alert color="success">YOU HAVE SELECTED: {continent}</Alert>
        )}
      </Card>
    </Fragment>
  );
}

export default Step1;
