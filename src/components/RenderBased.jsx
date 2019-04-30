import React from "react";
import Iframe from "./Iframe.jsx";
import CourseSelect from "./CourseSelect.jsx";

const RenderComponent = props => {
  const { tab, remember } = props;

  switch (tab) {
    case 0:
      return remember ? <Iframe {...props}/>: <CourseSelect {...props}/>
    case 1:
      return <div />;
    case 2:
      return <div>https://material-ui.com/demos/tables/</div>;
    default:
      return undefined;
  }
};
export default RenderComponent;
