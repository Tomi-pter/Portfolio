import styled from "styled-components";
import { Github } from "@styled-icons/feather/Github";
import { StackOverflow } from "@styled-icons/boxicons-logos/StackOverflow";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Frontendmentor } from "@styled-icons/simple-icons/Frontendmentor";
import { Mailbox } from "@styled-icons/bootstrap/Mailbox";
import { Codesandbox } from "@styled-icons/feather/Codesandbox";

const Socials = styled.footer`
  padding: 5rem 1.5rem 1.5rem;

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0 1rem;
  }
  p {
    font-family: "BJR";
    font-size: 0.8em;
    text-align: center;
  }
  svg {
    width: 1.5rem;
    color: var(--text-blue);
  }
  svg:hover,
  svg:focus {
    color: var(--p-blue);
    transform: scale(1.1);
  }
`;

function Social() {
  return (
    <Socials id="socials">
      <div className="icons">
        <a href="https://github.com/Tomi-pter">
          <Github />
        </a>
        <a href="https://stackoverflow.com/users/16713196/tomi?tab=profile">
          <StackOverflow />
        </a>
        <a href="https://www.linkedin.com/in/tomi-aiyeniko-725860209/">
          <Linkedin />
        </a>
        <a href="https://www.frontendmentor.io/profile/Tomi-pter">
          <Frontendmentor />
        </a>
        <a href="mailto:tomiaiyeniko@gmail.com">
          <Mailbox />
        </a>
        <a href="https://codesandbox.io/u/Tomi-pter">
          <Codesandbox />
        </a>
      </div>
      <p>Designed and Built by Tomi Aiyeniko</p>
    </Socials>
  );
}

export default Social;
