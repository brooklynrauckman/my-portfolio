import { css } from "@emotion/core";

export const intro = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 6rem 0;
  position: relative;
  z-index: 2;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const dot = css`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #ffd400;
`;

export const introContent = css`
  max-width: 325px;
  align-self: flex-start;
  height: 420px;
  margin-left: 8rem;
  position: relative;
  z-index: 2;
  @media (max-width: 1024px) {
    max-width: 300px;
    margin-left: 2rem;
  }
`;

export const introTitle = css`
  font-family: Roboto Slab, serif;
  font-size: 3rem;
  color: #021156;
`;

export const introParagraph = css`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  color: #021156;
`;

export const introPic = css`
  align-self: flex-end;
  margin-right: 2rem;
  max-width: 450px;
  padding-top: 1.5rem;
  margin-right: -2rem;
  @media (max-width: 1024px) {
    padding-top: 0;
    margin-top: -7rem;
    margin-right: -7rem;
  }
`;

export const seeProjectsButton = css`
  padding: 0.75rem;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #fb72ce;
  color: #fffcfe;
  font-weight: bold;
  font-size: 0.75rem;
  &:hover {
    cursor: pointer;
  }
`;

export const seeProjectsLink = css`
  outline: none;
`;

export const centeredButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 1024px) {
    justify-content: start;
  }
`;

export const squareGradient = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  index: 1;
  left: -11rem;
  margin-top: 1rem;
  background: linear-gradient(to bottom, #f6f8fc, transparent);
  transform: rotate(45deg);
  border-radius: 30px;
  @media (max-width: 1024px) {
    height: 25rem;
    width: 25rem;
    left: -8rem;
    margin-top: 1rem;
  }
`;