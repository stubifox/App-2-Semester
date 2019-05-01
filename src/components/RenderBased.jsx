import React from "react";
import Iframe from "./Iframe.jsx";
import CourseSelect from "./CourseSelect.jsx";
import Opening from "./Opening";

const RenderComponent = props => {
  const { tab, remember } = props;

  switch (tab) {
    case 0:
      return remember ? <Iframe {...props}/>: <CourseSelect {...props}/>
    case 1:
      return <div />;
    case 2:
      return <Opening/>
    default:
      return undefined;
  }
};
export default RenderComponent;
