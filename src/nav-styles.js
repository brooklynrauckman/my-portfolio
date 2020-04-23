import { css } from "@emotion/core";

export const nav = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1.25rem 2rem;
  margin: 0 0 6rem 0;
`;

export const navLinks = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const navLink = css`
  padding: 0 1rem;
  text-decoration: none;
  color: inherit;
  font-size: 0.95rem;
`;

export const menuLink = css`
  padding: 1rem 0;
  text-decoration: none;
  color: inherit;
  font-size: 0.95rem;
`;

export const menu = css`
  display: none;
  @media (max-width: 1024px) {
    display: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 0 0 1.5rem;
    position: relative;
    z-index: 1;
  }
`;

export const menuItems = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: -1;
  top: 3rem;
`;

export const navLogo = css`
  height: 2rem;
  width: 2rem;
`;

export const hireMeButton = css`
  padding: 0.75rem;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #f6eaf8;
  color: #fa72ce;
  font-weight: bold;
  font-size: 0.75rem;
  position: relative;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;

export const hireMeLink = css`
  outline: none;
`;

export const triangleGradient = css`
  height: 35rem;
  width: auto;
  position: absolute;
  z-index: -1;
  right: -20rem;
  margin-top: -3rem;
`;

export const mobileNavRight = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
