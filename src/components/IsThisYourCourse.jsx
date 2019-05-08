import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import AnimatedInput from "./AnimatedInputField.jsx";
import Iframe from "./Iframe.jsx";
import { LoyaltyOutlined } from "@material-ui/icons";

const CourseAsker = () => {
  const default_url = "https://vorlesungsplan.dhbw-mannheim.de/";
  const [courseUrl, setCourseUrl] = useState(default_url);
  const [clicked, setClicked] = useState(false);
  const [inputHandler, handleInput] = useState(String);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (default_url !== courseUrl) {
      changingFunctions.handleStorage();
    }
    const storage = localStorage.getItem("courseUrl");
    if (storage) {
      setCourseUrl(storage);
      setSelected(true);
    }
  });

  const changingFunctions = {
    validateCourseUrl: () => {
      setCourseUrl(inputHandler);
      setSelected(true);
    },
    handleStorage: () => {
      localStorage.setItem("courseUrl", courseUrl);
    }
  };
  if (selected) {
    return <Iframe src={courseUrl} />;
  }
  return !clicked ? (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      onClick={() => {
        openTabAfterTimeout(courseUrl, setClicked(true));
      }}
    >
      Click and Select your Course
    </Button>
  ) : (
    <AnimatedInput
      onChange={handleInput}
      onSubmit={changingFunctions.validateCourseUrl}
      submitText="Show me!"
    >
      <LoyaltyOutlined />
    </AnimatedInput>
  );
};
const openTabAfterTimeout = (url, func) => {
  if (typeof func === "function") {
    func();
  }
  setTimeout(() => {
    window
      .open(
        url,
        "s",
        `width=${window.innerWidth / 1.5}, height=${window.innerHeight /
          1.5}, left=${window.innerWidth / 5}, top=${window.innerHeight /
          6}, resizable=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no`
      )
      .blur();
    window.focus();
  }, 1500);
};

export default CourseAsker;
