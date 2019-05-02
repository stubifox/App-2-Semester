import React from "react";
import Iframe from "./Iframe.jsx";
import CourseSelect from "./CourseSelect.jsx";
import Opening from "./Opening";
import { marketData } from "../data/markets.js";

const RenderComponent = props => {
  const { tab, remember } = props;

  switch (tab) {
    case 0:
      return remember ? <Iframe {...props} /> : <CourseSelect {...props} />;
    case 1:
      return <div />;
    case 2:
      return <Opening data={marketData} />;
    default:
      return undefined;
  }
};
export default RenderComponent;
