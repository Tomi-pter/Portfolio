import styled from "styled-components/macro";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

const HeadNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 1px 5px rgb(0, 0, 0, 0.25);

  h2 {
    font-family: "BJSB";
    margin: 1rem 0;
  }

  && svg {
    width: 2rem;
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
          Tomi
          <span> /{tagClose}</span>
        </h2>
        <nav>
          <Menu />
        </nav>
      </HeadNav>
    </>
  );
}

export default Header;
