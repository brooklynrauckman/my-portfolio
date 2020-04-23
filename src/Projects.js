import React, { useState } from "react";
import { css } from "@emotion/core";
import * as styles from "./projects-styles.js";
import SideScroll from "./SideScroll.js";
import config from "./config.js";

function Projects() {
  const [activeProject, setActiveProject] = useState("records");

  return (
    <div css={styles.projects} id="projects">
      <SideScroll
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <div css={styles.squareGradient}></div>
      <div css={styles.squareGradientTwo}></div>
      {config.projects.map((project) => (
        <div css={styles.projectView(project.id === activeProject)}>
          <div css={styles.projectDetails}>
            <h2 css={styles.projectTitle}>{project.title}</h2>
            <p css={styles.projectParagraph}>{project.caption}</p>
            <div css={styles.skillIcons}>
              {project.tools.map((tool) => (
                <div css={styles.skillIconCircle}>
                  <img src={tool} css={styles.skillIcon} />
                </div>
              ))}
            </div>
          </div>

          <div css={styles.projectBox}>
            <img src={project.thumbnail} css={styles.projectPic} />
            <div css={styles.projectLinks}>
              <a
                href="https://github.com/brooklynrauckman"
                target="blank"
                css={styles.viewCodeLink}
              >
                <button css={styles.viewCodeButton}>
                  <div css={styles.viewCodeWrapper}>
                    <svg
                      css={styles.githubIcon}
                      viewBox="0 0 106 106"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="2"
                    >
                      <g transform="scale(.6092)">
                        <path fill="none" d="M0 0h174v174H0z" />
                        <clipPath id="a">
                          <path d="M0 0h174v174H0z" />
                        </clipPath>
                        <g clip-path="url(#a)">
                          <path
                            d="M87.288 2.348C38.988 2.348 0 41.336 0 89.636c0 38.406 25.022 70.994 59.938 82.632 4.655.582 5.819-1.746 5.819-4.073v-15.13c-24.44 5.237-29.678-11.639-29.678-11.639-4.074-9.892-9.893-12.802-9.893-12.802-8.147-5.237.582-5.237.582-5.237 8.729.582 13.384 8.729 13.384 8.729 7.565 13.384 20.367 9.31 25.605 6.983.582-5.82 2.91-9.311 5.819-11.639-19.203-2.327-39.57-9.892-39.57-43.062 0-9.31 3.491-17.457 8.728-23.276-1.164-2.328-4.073-11.057.582-23.277 0 0 7.565-2.328 23.859 8.729 6.983-1.746 14.548-2.91 22.113-2.91 7.565 0 15.13 1.164 22.113 2.91 16.875-11.057 23.858-8.73 23.858-8.73 4.656 12.221 1.746 20.95.582 23.278 5.82 5.819 8.729 13.966 8.729 23.276 0 33.752-20.367 40.735-39.57 43.062 2.91 2.91 5.819 8.147 5.819 16.294v23.859c0 2.327 1.745 5.237 5.819 4.073 34.915-11.638 59.355-44.226 59.355-82.632.582-47.718-38.406-86.706-86.705-86.706z"
                            fill="#181616"
                          />
                        </g>
                      </g>
                    </svg>
                    View Code
                  </div>
                </button>
              </a>
              <a href={project.app} target="blank" css={styles.visitSiteLink}>
                <button css={styles.visitSiteButton}>Visit Site</button>
              </a>
            </div>
          </div>
          <img src="/dots.svg" css={styles.dots} />
        </div>
      ))}
    </div>
  );
}

export default Projects;