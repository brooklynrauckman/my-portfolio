import { css } from "@emotion/core";

export const skills = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
  @media (max-width: 1024px) {
    margin-top: 12rem;
  }
`;

export const skillsTitle = css`
  font-family: Roboto Slab, serif;
  font-size: 2.25rem;
  color: #021156;
  @media (max-width: 1024px) {
    position: relative;
    z-index: 2;
  }
`;

export const skillText = css`
  font-size: 0.75rem;
  color: #021156;
`;

export const skillContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4rem 4rem 0;
  position: relative;
  z-index: 2;
`;

export const skillIcons = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 0 5rem 4.5rem;
`;

export const skillIcon = css`
  height: 100%;
`;

export const skillIconCircle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  height: 7rem;
  width: 7rem;
  padding: 1.5rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
`;

export const squareGradient = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  index: 1;
  right: -5rem;
  margin-top: 2rem;
  background: linear-gradient(to bottom, #f6f8fc, transparent);
  transform: rotate(45deg);
  border-radius: 30px;
  @media (max-width: 1024px) {
    right: -16rem;
    margin-top: -25rem;
  }
`;

export const squareGradientTwo = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  index: 1;
  left: -4rem;
  margin-top: -2rem;
  background: linear-gradient(to right, #f6f8fc, transparent);
  transform: rotate(-45deg);
  border-radius: 30px;
  @media (max-width: 1024px) {
    left: -6rem;
    margin-top: 18rem;
  }
`;
