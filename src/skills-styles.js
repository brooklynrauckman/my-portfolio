import { css } from "@emotion/core";

export const skills = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 0 6rem 0;
  overflow-x: hidden;
  position: relative;
`;

export const skillsTitle = css`
  font-family: Roboto Slab, serif;
  font-size: 2.25rem;
  color: #021156;
  @media (max-width: 780px) {
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
  @media (max-width: 780px) {
    margin: 0 3rem 3rem 0;
  }
`;

export const skillIcons = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 0 5rem 4.5rem;
  @media (max-width: 780px) {
    margin: 5rem 0 5rem 3rem;
  }
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
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const squareGradient = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  z-index: 1;
  right: -12rem;
  margin-top: 2rem;
  background: linear-gradient(90deg, white 0%, #f6f8fc 100%);
  transform: rotate(45deg);
  border-radius: 30px;
  @media (max-width: 780px) {
    right: -20rem;
    margin-top: -25rem;
  }
`;

export const squareGradientTwo = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  z-index: 1;
  left: -4rem;
  margin-top: -2rem;
  background: linear-gradient(90deg, white, #f6f8fc);
  transform: rotate(-45deg);
  border-radius: 30px;
  @media (max-width: 780px) {
    left: -13rem;
    margin-top: 18rem;
  }
`;
