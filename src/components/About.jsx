import styled from "styled-components/macro";

const AboutMe = styled.article`
  text-align: left;
  font-family: "BJR";
  font-size: 1.2rem;
  padding: 1.5rem 1.5rem;

  h1 {
    font-size: 2em;
    font-family: "BJB";
    margin: 0.5rem 0;
    color: var(--p-blue);
  }
  h2 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: var(--p-blue);
    font-size: 0.8em;
  }
  section {
    display: flex;
    justify-content: center;
  }
  img {
    width: 40px;
    height: 40px;
    margin: 0 0.25rem;
  }

  && a svg {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.5rem;
    color: var(--text-blue);
  }
`;

function About() {
  return (
    <AboutMe>
      <h2>Hi, i'm</h2>
      <h1>Tomi Aiyeniko👍🏾</h1>
      <h2>I'm a frontend developer.</h2>
      <p>
        I enjoy bringing web designs to life in accessible and responsive ways.
        I love innovation and I always challenge myself to learn and grow.
      </p>
      <p>
        At the moment I freelance on <a href="upwork.com">Upwork</a> and i'm
        open to collaborations
      </p>
      <p>
        I'm based in Abuja, Nigeria and i'm currently searching for
        opportunities as a developer.
      </p>
    </AboutMe>
  );
}

export default About;
