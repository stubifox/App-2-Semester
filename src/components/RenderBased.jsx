import React from "react";
import Iframe from "./Iframe.jsx";
import CourseSelect from "./CourseSelect.jsx";
import Opening from "./Opening";
import { marketData } from "../data/markets.js";
import Weather from "./Weather.jsx";

const RenderComponent = props => {
  const { tab, remember, newCity } = props;

  switch (tab) {
    case 0:
      return remember ? <Iframe {...props} /> : <CourseSelect {...props} />;
    case 1:
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Weather {...props} displayLocation />
          <Weather {...props} displayCity />
          {newCity && <Weather {...props} newCity />}
        </div>
      );
    case 2:
      return <Opening data={marketData} style={props} />;
    default:
      throw Error("ups... something went wrong here");
  }
};
export default RenderComponent;
