import React from "react";
import * as styles from "./about-styles.js";
import { css } from "@emotion/core";

function About() {
  return (
    <div css={styles.about} id="about">
      <div css={styles.squareGradient}></div>
      <div css={styles.aboutContent}>
        <div css={styles.dot}></div>
        <h1 css={styles.aboutTitle}>Well, You made it this far!</h1>
        <p css={styles.aboutParagraph}>
          So you might as well learn a bit more about me. My passion for math,
          solving problems, and creating things, led me to learn software
          engineering. I enjoy both collaborating with people and zoning-in on
          my work. I love the satisfaction of completing tasks, big and small. I
          am driven, friendly, honest, flexible, and committed to producing
          quality work. I chose to create projects with various features, using
          a variety of tools to build upon my skill set. I have dedicated myself
          to learning and practicing foundational software engineering skills.
          Apart from this knowledge, I have experience in various work settings,
          providing effective communication and collaboration. I am a lifelong
          learner who looks forward to the opportunity to work with new
          technologies and new people.
        </p>
        <div css={styles.centeredButtons}>
          <a href="/resume.pdf" css={styles.resumeLink}>
            <button css={styles.resumeButton}>Download Resume</button>
          </a>
          <a
            href="https://www.linkedin.com/in/brooklyn-rauckman-21514390/"
            css={styles.contactLink}
          >
            <button css={styles.contactButton}>Get in Touch</button>
          </a>
        </div>
        <div css={styles.footer}>
          <svg
            css={styles.footerLogo}
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
                  d="M284.824 201.847v-73.314c0-5.127 4.163-9.289 9.289-9.289h37.167c20.508 0 37.157 16.65 37.157 37.157 0 10.254-8.324 18.578-18.578 18.578h-9.987c16.371 3.882 28.565 18.607 28.565 36.157v4.602c0 7.714-6.263 13.977-13.977 13.977h-41.768c-15.381 0-27.868-12.487-27.868-27.868zm83.613-45.446z"
                  fill="url(#_Linear2)"
                  transform="translate(-419.664 -184.969) scale(1.55118)"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="_Linear2"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(138.546) rotate(52.879 .162 2.497)"
              >
                <stop offset="0" stop-color="#c470f4" />
                <stop offset="1" stop-color="#fa72ce" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
