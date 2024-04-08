import linkedinLogo from "../../assets/linkedin-logo.svg";
import gitHubLogo from "../../assets/github-logo.svg";
import cvLogo from "../../assets/cv-logo.svg";
import cv from "../../assets/Juan David Bedoya Velez FullStack.pdf";

export default function Social() {
  return (
    <div className="grid grid-flow-col gap-4 justify-center">
      <a
        className="hover:cursor-pointer hover:scale-110 transition-all active:scale-125"
        href="https://www.linkedin.com/in/juandavidbedoyavelez/"
        target="_blank"
      >
        <img src={linkedinLogo} alt="" />
      </a>
      <a
        className="hover:cursor-pointer hover:scale-110 transition-all active:scale-125"
        href="https://github.com/Juan-Velez-Dev"
        target="_blank"
      >
        <img src={gitHubLogo} alt="" />
      </a>
      <a
        className="hover:cursor-pointer hover:scale-110 transition-all active:scale-125"
        href={cv}
        target="_blank"
      >
        <img src={cvLogo} alt="" />
      </a>
    </div>
  );
}
