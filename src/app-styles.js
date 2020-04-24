import { css } from "@emotion/core";

export const app = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: white;
  position: relative;
  @media (max-width: 780px) {
    overflow-x: hidden;
  }
`;

export const triangleGradient = css`
  height: 35rem;
  width: auto;
  position: absolute;
  z-index: 0;
  right: -20rem;
  top: -25rem;
`;
