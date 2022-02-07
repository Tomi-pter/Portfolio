import styled from "styled-components";
import { Heading2 } from "./Skills";
import { Web } from "@styled-icons/foundation/Web";
import { Github } from "@styled-icons/feather/Github";
import Rockps from "../images/rock-paper/rock-paper.png";
import Sneaker from "../images/sneakers/sneakers.png";
import Room from "../images/room-home/room-home.png";
import Fylo from "../images/fylo-landing/fylo-landing.jpg";
import Clip from "../images/clipboard-landing/clipboard-landing.jpg";

const WorkSect = styled.section`
  padding: 0.25rem 1.5rem;
  font-size: 1.1em;

  p {
    font-family: "BJR";
    color: var(--p-blue);
  }
  img {
    max-width: 100%;
    display: block;
    position: relative;
  }

  h3 {
    font-family: "BJSB";
    text-transform: uppercase;
  }
  svg {
    width: 2rem;
    color: var(--text-blue);
  }
  svg:hover,
  svg:focus {
    color: var(--p-blue);
    transform: scale(1.1);
  }

  @media screen and (min-width: 745px) {
    padding: 0.25rem 3rem;
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

  @media screen and (min-width: 745px) {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    max-width: 80%;
    margin: 2.5rem auto;
    padding: 2rem 1rem;

    &:nth-of-type(2n) {
      flex-direction: row-reverse;
    }
    a {
      max-width: 50%;
    }
    &.more {
      display: block;
    }

    a:visited img,
    img:hover,
    a:focus img,
    a:active img {
      filter: none;
    }
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
  margin: 0.5rem 0.25rem;
`;

const Link = styled(Used)`
  border: none;
  margin-top: 0.5rem;
`;

function Works() {
  return (
    <>
      <Heading2 id="projects">My Work</Heading2>
      <WorkSect>
        <WorkShow>
          <a href="https://tomi-rockps.netlify.app/">
            <img src={Rockps} alt="Rock, paper, scissors page screenshot" />
          </a>
          <div>
            <h3>ROCK, PAPER, SCISSORS GAME</h3>
            <p>
              An interactive single player rock, paper, scissors game played
              against the computer.
            </p>
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
          </div>
        </WorkShow>
        <WorkShow>
          <a href="https://tomi-ecommerce-product.netlify.app/">
            <img src={Sneaker} alt="Sneaker shop page screenshot" />
          </a>
          <div>
            <h3>SNEAKER SHOP</h3>
            <p>
              An interactive sneaker shopping page with cart functionality and a
              lightbox product gallery
            </p>
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
          </div>
        </WorkShow>
        <WorkShow>
          <a href="https://tomi-home-landing.netlify.app/">
            <img src={Room} alt="room homepage screenshot" />
          </a>
          <div>
            <h3>ROOM HOME PAGE</h3>
            <p>Room homepage with slider functionality to browse pictures</p>
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
          </div>
        </WorkShow>
        <WorkShow>
          <a href="https://tomi-fylo-alternate.netlify.app/">
            <img src={Fylo} alt="fylo landing page screenshot" />
          </a>
          <div>
            <h3>FYLO LANDING PAGE</h3>
            <p>
              Fully responsive Fylo landing page with client-side form
              validation
            </p>
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
          </div>
        </WorkShow>
        <WorkShow>
          <a href="https://tomi-clipboard-landing.netlify.app/">
            <img src={Clip} alt="clipboard landing page screenshot" />
          </a>
          <div>
            <h3>CLIPBOARD LANDING PAGE</h3>
            <p>
              A modern landing page focused on responsiveness, accessibility and
              usability
            </p>
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
          </div>
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
