import React from "react";
import * as styles from "./skills-styles.js";
import { css } from "@emotion/core";
import config from "./config.js";

function Skills() {
  return (
    <div css={styles.skills} id="skills">
      <div css={styles.squareGradient}></div>
      <div css={styles.squareGradientTwo}></div>
      <h1 css={styles.skillsTitle}>What I Build With</h1>
      <div css={styles.skillIcons}>
        {config.skills.map((skill) => (
          <div css={styles.skillContainer}>
            <a href={skill.link} target="blank">
              <div css={styles.skillIconCircle}>
                <img src={skill.icon} css={styles.skillIcon} />
              </div>
            </a>
            <p css={styles.skillText}>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
