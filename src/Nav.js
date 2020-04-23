import React, { useState } from "react";
import { css } from "@emotion/core";
import * as styles from "./nav-styles.js";

function Nav() {
  const [menu, toggleMenu] = useState(false);
  return (
    <div css={styles.nav}>
      <svg
        css={styles.navLogo}
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

      <div css={styles.navLinks}>
        <a href="#projects" css={styles.navLink}>
          Projects
        </a>
        <a href="#skills" css={styles.navLink}>
          Skills
        </a>
        <a href="#about" css={styles.navLink}>
          About
        </a>
      </div>
      <div css={styles.mobileNavRight}>
        <a
          href="https://www.linkedin.com/in/brooklyn-rauckman-21514390/"
          target="blank"
          css={styles.hireMeLink}
        >
          <button css={styles.hireMeButton}>Hire Me</button>
        </a>
        <div css={styles.menu} onClick={() => toggleMenu(!menu)}>
          <img src="/menu.svg" />
          {menu === false ? null : (
            <div css={styles.menuItems}>
              <a href="#projects" css={styles.menuLink}>
                Projects
              </a>
              <a href="#skills" css={styles.menuLink}>
                Skills
              </a>
              <a href="#about" css={styles.menuLink}>
                About
              </a>
            </div>
          )}
        </div>

        <img src="/triangle.png" css={styles.triangleGradient} />
      </div>
    </div>
  );
}

export default Nav;
