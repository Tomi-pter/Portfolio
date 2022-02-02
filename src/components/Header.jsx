import styled from "styled-components/macro";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

const HeadNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 1px 5px rgb(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--linear-gradient);

  h2 {
    font-family: "BJSB";
    margin: 1rem 0;
  }

  && svg {
    width: 2rem;
  }
  .desktop {
    display: none;
  }
  .desktop a {
    color: var(--text-blue);
    text-decoration: none;
    padding: 0 0.5rem;
    font-family: "BJR";
  }

  @media screen and (min-width: 745px) {
    .desktop {
      display: block;
    }
  }
`;

function Header() {
  const tagOpen = "<";
  const tagClose = ">";

  return (
    <>
      <HeadNav>
        <h2>
          <span>{tagOpen}</span>
          TomiPter
          <span> /{tagClose}</span>
        </h2>
        <nav>
          <Menu className="mobile" />
          <div className="desktop">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#socials">Social</a>
          </div>
        </nav>
      </HeadNav>
    </>
  );
}

export default Header;
