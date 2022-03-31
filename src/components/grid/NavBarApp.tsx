import styled from "styled-components";

const NavBar = styled.nav`
    background: #3a3a55;
    grid-area: nav;
    padding: 0.25rem;
`;
const H1 = styled.h1`
    font-size: 20px;

`;

const NavBarApp = () => {
    return <NavBar><H1>Información Cripto </H1></NavBar>
}

export default NavBarApp;