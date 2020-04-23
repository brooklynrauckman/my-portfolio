import React from "react";
import { css } from "@emotion/core";
import * as styles from "./projects-styles.js";
import config from "./config.js";

function SideScroll(props) {
  const { activeProject, setActiveProject } = props;

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }
  return (
    <div css={styles.sideScroll}>
      <div
        css={styles.scrollArrowCircle}
        id="slideBack"
        onClick={() => {
          sideScroll(document.getElementById("container"), "left", 25, 400, 10);
        }}
      >
        <svg
          css={styles.scrollArrow}
          viewBox="0 0 251 251"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
        >
          <path fill="none" d="M0 0h250.02v250.02H0z" />
          <path
            d="M180.524 238.239L67.77 125.588 181.544 11.763"
            fill="none"
            stroke="#021156"
            stroke-width="20.40776"
          />
        </svg>
      </div>
      <div css={styles.previewScroll} id="container">
        {config.projects.map((project) => (
          <div css={styles.previewConatainer}>
            <p css={styles.previewTitle}>{project.title}</p>
            <div
              css={styles.previewBox}
              onClick={() => {
                setActiveProject(project.id);
              }}
            >
              <img
                src={project.preview}
                css={
                  activeProject === project.id
                    ? styles.active
                    : styles.previewPic
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div
        css={styles.scrollArrowCircle}
        onClick={() => {
          sideScroll(
            document.getElementById("container"),
            "right",
            25,
            400,
            10
          );
        }}
      >
        <svg
          css={styles.scrollArrow}
          transform="rotate(180)"
          viewBox="0 0 251 251"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
        >
          <path fill="none" d="M0 0h250.02v250.02H0z" />
          <path
            d="M180.524 238.239L67.77 125.588 181.544 11.763"
            fill="none"
            stroke="#021156"
            stroke-width="20.40776"
          />
        </svg>
      </div>
    </div>
  );
}

export default SideScroll;
