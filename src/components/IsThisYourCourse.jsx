import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import AnimatedInput from "./AnimatedInputField.jsx";
import Iframe from "./Iframe.jsx";
import { LoyaltyOutlined } from "@material-ui/icons";

const CourseAsker = props => {
  const { displayLoadingBar } = props;
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
      displayLoadingBar(500);
      setSelected(true);
    },
    handleStorage: () => {
      localStorage.setItem("courseUrl", courseUrl);
    }
  };

  if (selected) {
    return (
      <div>
        <div>
          <Iframe src={courseUrl} displayLoadingBar={displayLoadingBar} />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setClicked(false);
            setSelected(false, () => {
              console.log(selected);
            });
            localStorage.clear();
            console.log("====================================");
            console.log(`clicked: ${clicked} and selected is ${selected}`);
            console.log("====================================");
          }}
        >
          change Course
        </Button>
      </div>
    );
  }
  return !clicked ? (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      onClick={() => {
        openTabAfterTimeout(
          courseUrl,
          setClicked(true),
          displayLoadingBar(500)
        );
      }}
    >
      Click and Select your Course
    </Button>
  ) : (
    <AnimatedInput
      onChange={handleInput}
      onSubmit={changingFunctions.validateCourseUrl}
      submitText="Show me!"
      label="Paste your Url here"
      left={false}
      displayLoadingBar={displayLoadingBar}
    >
      <LoyaltyOutlined />
    </AnimatedInput>
  );
};
const openTabAfterTimeout = (url, stateSetter, displayLoadingBar) => {
  if (typeof stateSetter && displayLoadingBar === "function") {
    displayLoadingBar();
    stateSetter();
  }
  setTimeout(() => {
    window
      .open(
        url,
        "s",
        `width=${window.innerWidth / 1.5}, height=${window.innerHeight /
          1.5}, left=${window.innerWidth / 5}, top=${window.innerHeight /
          6}, resizable=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no `
      )
      .blur();
    window.focus();
  }, 1500);
};

export default CourseAsker;
