import React from "react";
import Opening from "./Opening";
import { marketData } from "../data/markets.js";
import Weather from "./Weather.jsx";
import CourseAsker from "./IsThisYourCourse.jsx";

const RenderComponent = props => {
  const { tab } = props;

  switch (tab) {
    case 0:
      return <CourseAsker {...props} />;
    case 1:
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Weather {...props} displayLocation />
          <Weather {...props} displayCity />
        </div>
      );
    case 2:
      return <Opening data={marketData} style={props} {...props} />;
    default:
      throw Error("ups... something went wrong here");
  }
};
export default RenderComponent;
