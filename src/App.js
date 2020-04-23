import React from "react";
import { css } from "@emotion/core";
import * as styles from "./app-styles.js";
import Intro from "./Intro.js";
import Projects from "./Projects.js";
import Skills from "./Skills.js";
import About from "./About.js";

function App() {
  return (
    <div css={styles.app}>
      <Intro />
      <Projects />
      <Skills />
      <About />
    </div>
  );
}

export default App;
