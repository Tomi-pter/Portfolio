import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { TailwindCss } from "@styled-icons/boxicons-logos/TailwindCss";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Graphql } from "@styled-icons/simple-icons/Graphql";

const Heading2 = styled.h2`
  font-size: clamp(26px, 5vw, 32px);
  font-family: "BJSB";
  padding: 2rem 1.5rem 1rem;
  color: var(--p-blue);
  display: flex;
  align-items: center;
  white-space: nowrap;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: var(--p-blue);
    margin-left: 10px;
    opacity: 0.5;
  }

  @media screen and (min-width: 745px) {
    text-align: center;
    justify-content: center;
    padding: 2rem 3rem 1rem;

    &::before {
      content: "";
      height: 1px;
      width: 25%;
      background-color: var(--p-blue);
      opacity: 0.5;
      margin-right: 10px;
    }
    &::after {
      width: 25%;
    }
  }
`;
const SkillsSect = styled.section`
  padding: 1rem 1.5rem;
  text-align: center;
  font-family: "BJSB";
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 745px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 1rem 5rem;
  }
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.25);
  padding: 1rem 1rem 0.5rem;

  p {
    text-transform: lowercase;
  }

  && svg {
    width: 2rem;
    height: 2rem;
  }
`;

function Skills() {
  return (
    <>
      <Heading2 id="skills">My Stack</Heading2>
      <SkillsSect>
        <SkillBox>
          <FontAwesomeIcon icon={faHtml5} />
          <p>HTML</p>
        </SkillBox>
        <SkillBox>
          <FontAwesomeIcon icon={faCss3} />
          <p>CSS</p>
        </SkillBox>
        <SkillBox>
          <FontAwesomeIcon icon={faJs} />
          <p>JAVASCRIPT</p>
        </SkillBox>
        <SkillBox>
          <FontAwesomeIcon icon={faReact} />
          <p>REACT.js</p>
        </SkillBox>
        <SkillBox>
          <FontAwesomeIcon icon={faGithub} />
          <p>GIT/GITHUB</p>
        </SkillBox>
        <SkillBox>
          <TailwindCss />
          <p>TAILWINDCSS</p>
        </SkillBox>
        <SkillBox>
          <Styledcomponents />
          <p>STYLED COMPONENTS</p>
        </SkillBox>
        <SkillBox>
          <Typescript />
          <p>TYPESCRIPT</p>
        </SkillBox>
        <SkillBox>
          <Redux />
          <p>REDUX</p>
        </SkillBox>
      </SkillsSect>
      <Heading2>Currently Learning</Heading2>
      <SkillsSect>
        <SkillBox>
          <Graphql />
          <p>GRAPHQL</p>
        </SkillBox>
      </SkillsSect>
    </>
  );
}

export default Skills;
export { Heading2 };
