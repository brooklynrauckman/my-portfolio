import { css } from "@emotion/core";

export const about = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 780px) {
    margin: 4rem 1rem 0 1rem;
  }
`;

export const dot = css`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #ffd400;
`;

export const aboutContent = css`
  position: relative;
  z-index: 2;
  max-width: 450px;
`;

export const aboutTitle = css`
  font-family: Roboto Slab, serif;
  font-size: 3rem;
  color: #021156;
  @media (max-width: 780px) {
    font-size: 2.5rem;
  }
`;

export const aboutParagraph = css`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  color: #021156;
  line-height: 1.5rem;
`;

export const resumeButton = css`
  padding: 0.75rem;
  margin-right: 1rem;
  outline: none;
  border: none;
  border-radius: 20px;
  color: #fb72ce;
  background-color: #fff1f9;
  font-weight: bold;
  font-size: 0.75rem;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #ffdbef;
  }
`;

export const resumeLink = css`
  outline: none;
`;

export const contactButton = css`
  padding: 0.75rem;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #fb72ce;
  color: #fffcfe;
  font-weight: bold;
  font-size: 0.75rem;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #ff3bbf;
  }
`;

export const contactLink = css`
  outline: none;
`;

export const centeredButtons = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
`;

export const footerLogo = css`
  height: 2rem;
  width: 2rem;
`;

export const footer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6rem 0;
`;

export const squareGradient = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  z-index: 1;
  right: 30rem;
  margin-top: 1rem;
  background: linear-gradient(to right, #f6f8fc, transparent);
  transform: rotate(-45deg);
  border-radius: 30px;
  @media (max-width: 780px) {
    right: -3rem;
    margin-top: -10rem;
  }
`;
