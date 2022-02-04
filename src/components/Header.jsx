import styled from "styled-components/macro";
import { ContactBtn } from "./Contact";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import { Close } from "@styled-icons/evaicons-solid/Close";

const HeadNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 1px 5px rgb(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--linear-gradient);

  h2 {
    font-family: "BJSB";
    margin: 1rem 0;
    font-size: 2rem;
  }

  && svg {
    width: 2rem;
    color: var(--text-blue);
  }
  button.close,
  .mobile button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .desktop {
    height: 100vh;
    width: 0;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    transition: all 300ms cubic-bezier(0.59, 0, 0.49, 1);
  }
  .desktop a {
    color: var(--text-blue);
    text-decoration: none;
    padding: 2rem 40%;
    display: block;
    font-family: "BJR";
    opacity: 0;
  }
  .close {
    padding: 2rem 40%;
  }
  .desktop.clicked {
    width: 70vw;
    background-color: #0a192f;
  }
  .desktop.clicked a {
    opacity: 1;
  }
  .dim {
    background-color: hsl(0, 0%, 0%, 0.75);
    position: fixed;
    visibility: hidden;
    top: 0;
    right: 0;
    width: 0;
    height: 100vh;
    z-index: 7;
    transition: all 300ms cubic-bezier(0.59, 0, 0.49, 1);
  }
  .dim.clicked {
    visibility: visible;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 745px) {
    .desktop {
      width: auto;
      height: auto;
      position: static;
    }
    .desktop a {
      display: unset;
      padding: 0;
      margin: 0 1rem;
      opacity: 1;
      position: relative;
    }
    .desktop a::after {
      background-color: var(--p-blue);
      bottom: -4px;
      content: "";
      height: 2px;
      left: 0px;
      position: absolute;
      transform: scaleX(0);
      transition: transform 0.3s ease 0s;
      width: 100%;
    }
    .desktop a:hover::after,
    .desktop a:focus::after {
      transform: scaleX(1);
      /*border-bottom: 2px solid var(--white);*/
      transform-origin: center;
    }
    .mobile,
    .close {
      display: none;
    }
  }
`;

const ResumeBtn = styled(ContactBtn)`
  width: 50%;
  margin: 1rem 25%;

  &:hover,
  &:focus {
    border-width: 1px;
  }

  && a {
    font-family: inherit;
    color: inherit;
    padding: 0;
  }
  @media screen and (min-width: 745px) {
    display: inline;
    margin: 0 0 0 1rem;
    width: inherit;

    && a {
      margin: 0 0.5rem;
    }

    && a:hover::after,
    a:focus::after {
      transform: scaleX(0);
    }
  }
`;

function Header() {
  const openNav = () => {
    document.querySelector(".desktop").classList.add("clicked");
    document.querySelector(".dim").classList.add("clicked");
  };

  const closeNav = () => {
    document.querySelector(".desktop").classList.remove("clicked");
    document.querySelector(".dim").classList.remove("clicked");
  };

  const linkClicked = () => {
    document.querySelector(".desktop").classList.remove("clicked");
    document.querySelector(".dim").classList.remove("clicked");
  };

  return (
    <>
      <HeadNav>
        <h2>🅿️</h2>
        <nav>
          <div className="mobile">
            <button onClick={openNav}>
              <Menu />
            </button>
            <div className="dim"></div>
          </div>
          <div className="desktop">
            <button className="close" onClick={closeNav}>
              <Close />
            </button>
            <a href="#about" onClick={linkClicked}>
              About
            </a>
            <a href="#skills" onClick={linkClicked}>
              Skills
            </a>
            <a href="#projects" onClick={linkClicked}>
              Projects
            </a>
            <a href="#contact" onClick={linkClicked}>
              Contact
            </a>
            <a href="#socials" onClick={linkClicked}>
              Social
            </a>
            <ResumeBtn>
              <a href="#">Resumé</a>
            </ResumeBtn>
          </div>
        </nav>
      </HeadNav>
    </>
  );
}

export default Header;
