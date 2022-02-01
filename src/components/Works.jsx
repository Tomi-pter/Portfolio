import styled from "styled-components";
import { Heading2 } from "./Skills";
import { Web } from "@styled-icons/foundation/Web";
import { Github } from "@styled-icons/boxicons-logos/Github";
import Rockps from "../images/rock-paper/rock-paper.png";
import Sneaker from "../images/sneakers/sneakers.png";
import Room from "../images/room-home/room-home.png";
import Fylo from "../images/fylo-landing/fylo-landing.png";
import Clip from "../images/clipboard-landing/clipboard-landing.png";

const WorkSect = styled.section`
  padding: 0 1.5rem;

  p {
    font-family: "BJR";
    color: var(--p-blue);
  }
  img {
    max-width: 100%;
    display: block;
  }
  h3 {
    font-family: "BJSB";
  }
  svg {
    width: 2rem;
    color: var(--text-blue);
  }
`;

const WorkShow = styled.div`
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.5);
  padding: 1rem;
  margin: 1rem 0;

  &.more {
    text-align: center;
  }
  &.more svg {
    width: 5rem;
  }
`;

const Used = styled.span`
  font-family: "BJSB";
  font-size: 0.8rem;
  border: 1px solid var(--p-blue);
  border-radius: 0.25rem;
  color: var(--p-blue);
  padding: 0.25rem;
  display: inline-block;
  margin: 0.25rem;
`;

const Link = styled(Used)`
  border: none;
  margin-top: 0.5rem;
`;

function Works() {
  return (
    <>
      <Heading2>My Works</Heading2>
      <WorkSect>
        <WorkShow>
          <h3>ROCK, PAPER, SCISSORS GAME</h3>
          <p>
            An interactive single player rock, paper, scissors game played
            against the computer.
          </p>
          <a href="https://tomi-rockps.netlify.app/">
            <img src={Rockps} alt="Rock, paper, scissors page screenshot" />
          </a>
          <Used>REACT</Used>
          <Used>CSS</Used>
          <Used>STYLED-COMPONENTS</Used>
          <br />
          <Link
            as="a"
            href="https://github.com/Tomi-pter/rock-paper-scissors.git"
          >
            <Github />{" "}
          </Link>
          <Link as="a" href="https://tomi-rockps.netlify.app/">
            <Web />{" "}
          </Link>
        </WorkShow>
        <WorkShow>
          <h3>SNEAKER SHOP</h3>
          <p>
            An interactive sneaker shopping page with cart functionality and a
            lightbox product gallery
          </p>
          <a href="https://tomi-ecommerce-product.netlify.app/">
            <img src={Sneaker} alt="Sneaker shop page screenshot" />
          </a>
          <Used>HTML</Used>
          <Used>CSS</Used>
          <Used>JAVASCRIPT</Used>
          <br />
          <Link
            as="a"
            href="https://github.com/Tomi-pter/ecommerce-product-page.git"
          >
            <Github />{" "}
          </Link>
          <Link as="a" href="https://tomi-ecommerce-product.netlify.app/">
            <Web />{" "}
          </Link>
        </WorkShow>
        <WorkShow>
          <h3>ROOM HOME PAGE</h3>
          <p>Room homepage with slider functionality to browse pictures</p>
          <a href="https://tomi-home-landing.netlify.app/">
            <img src={Room} alt="room homepage screenshot" />
          </a>
          <Used>HTML</Used>
          <Used>CSS</Used>
          <Used>JAVASCRIPT</Used>
          <br />
          <Link as="a" href="https://github.com/Tomi-pter/room-homepage.git">
            <Github />{" "}
          </Link>
          <Link as="a" href="https://tomi-home-landing.netlify.app/">
            <Web />{" "}
          </Link>
        </WorkShow>
        <WorkShow>
          <h3>FYLO LANDING PAGE</h3>
          <p>
            Fully responsive Fylo landing page with client-side form validation
          </p>
          <a href="https://tomi-fylo-alternate.netlify.app/">
            <img src={Fylo} alt="fylo landing page screenshot" />
          </a>
          <Used>HTML</Used>
          <Used>CSS</Used>
          <Used>JAVASCRIPT</Used>
          <br />
          <Link
            as="a"
            href="https://github.com/Tomi-pter/fylo-alternate-landing.git"
          >
            <Github />{" "}
          </Link>
          <Link as="a" href="https://tomi-fylo-alternate.netlify.app/">
            <Web />{" "}
          </Link>
        </WorkShow>
        <WorkShow>
          <h3>CLIPBOARD</h3>
          <p>
            A modern landing page focused on responsiveness, accessibility and
            usability
          </p>
          <a href="https://tomi-clipboard-landing.netlify.app/">
            <img src={Clip} alt="clipboard landing page screenshot" />
          </a>
          <Used>HTML</Used>
          <Used>CSS</Used>
          <br />
          <Link
            as="a"
            href="https://github.com/Tomi-pter/clipboard-landing-page.git"
          >
            <Github />{" "}
          </Link>
          <Link as="a" href="https://tomi-clipboard-landing.netlify.app/">
            <Web />{" "}
          </Link>
        </WorkShow>
        <WorkShow className="more">
          <p>Check out my Github for more 👀</p>
          <Link as="a" href="https://github.com/Tomi-pter">
            <Github />
          </Link>
        </WorkShow>
      </WorkSect>
    </>
  );
}

export default Works;
