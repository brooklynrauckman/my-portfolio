import { css } from "@emotion/core";

export const projects = css`
  display: flex;
  flex-direction: column;
  margin: 6rem 0;
  z-index: 1;
  @media (max-width: 780px) {
    margin-top: 2rem;
  }
`;

export const sideScroll = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  margin: 0 1rem;
}
`;

export const scrollArrowCircle = css`
  margin-top: 1.75rem;
  padding: 1.5rem;
  border-radius: 50%;
  background-color: #fcfcfc;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.08);
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 780px) {
    display: none;
  }
`;

export const scrollArrow = css`
  height: 1.5rem;
  width: 1.5rem;
`;

export const previewScroll = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  overflow-x: hidden;
  padding-left: 13rem;
  padding-bottom: 1rem;

  @media (max-width: 780px) {
    overflow-x: scroll;
    margin: 0;
    padding-left: 32rem;
  }
`;

export const previewConatainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  opacity: 0.25;
`;

export const active = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
`;

export const previewBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8.5rem;
  width: 11.5rem;
  border: 0.75rem solid #fff;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

export const previewPic = css`
  height: 175%;
  border-radius: 10px;
  transform: rotate(-45deg);

  &:hover {
    cursor: pointer;
  }
`;

export const previewTitle = css`
  font-size: 0.75rem;
  font-weight: bold;
  color: #021156;
`;

export const projectView = (activeProject) => css`
  display: ${activeProject ? "flex" : "none"};
  align-items: start;
  justify-content: space-around;
  margin-top: 4rem;
  @media (max-width: 780px) {
    margin: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const skillIcons = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-end;
  margin-top: 4rem;
`;

export const skillIcon = css`
  height: 100%;
`;

export const skillIconCircle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  height: 4.5rem;
  width: 4.5rem;
  margin: 0 1rem 1rem 0;
  padding: 0.75rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);
`;

export const projectDetails = css`
  max-width: 350px;
  position: relative;
  z-index: 2;
  @media (max-width: 780px) {
    margin: 0 1rem 3rem 1rem;
    max-width: 450px;
    width: 100%;
  }
`;

export const projectBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40%;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
  overflow: hidden;
  @media (max-width: 780px) {
    margin: 0;
    max-width: 450px;
  }
`;

export const projectPic = css`
  width: 100%;
  border-radius: 10px;
  align-self: start;
`;

export const visitSiteButton = css`
  padding: 0.75rem;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #f6eaf8;
  color: #fa72ce;
  font-weight: bold;
  font-size: 0.75rem;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #ffdbef;
  }
`;

export const visitSiteLink = css`
  display: flex;
  align-items: stretch;
  padding-left: 1rem;
  outline: none;
  text-decoration: none;
`;

export const githubIcon = css`
  height: 1rem;
  width: 1rem;
  padding-right: 0.25rem;
`;

export const viewCodeLink = css`
  outline: none;
  text-decoration: none;
`;

export const viewCodeButton = css`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #f2f2f2;
  color: #181616;
  font-weight: bold;
  font-size: 0.75rem;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #e0e0e0;
  }
`;

export const viewCodeWrapper = css`
  display: flex;
  align-items: center;
`;

export const projectLinks = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: stretch;
  width: 100%;
  margin-top: 2rem;
`;

export const projectTitle = css`
  padding-top: 1rem;
  font-size: 1.875rem;
  font-weight: bold;
  color: #021156;
`;

export const projectParagraph = css`
  font-size: 1.125rem;
  color: #021156;
`;

export const dots = css`
  height: 20rem;
  position: absolute;
  right: 4rem;
  z-index: 1;
  margin-top: 20rem;
  @media (max-width: 780px) {
    right: -8rem;
    top: 90rem;
  }
`;

export const squareGradient = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  z-index: -1;
  right: -6rem;
  margin-top: -2rem;
  background: linear-gradient(to right, #f6f8fc, transparent);
  transform: rotate(45deg);
  border-radius: 20px;
  @media (max-width: 780px) {
    right: 14rem;
    margin-top: 2rem;
  }
`;

export const squareGradientTwo = css`
  height: 35rem;
  width: 35rem;
  position: absolute;
  z-index: 1;
  left: 1rem;
  margin-top: 5rem;
  background: linear-gradient(to right, #f6f8fc, transparent);
  transform: rotate(-45deg);
  border-radius: 30px;
  @media (max-width: 780px) {
    left: -20rem;
    margin-top: 36rem;
  }
`;
