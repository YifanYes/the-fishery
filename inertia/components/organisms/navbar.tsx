import { fishOutline } from 'ionicons/icons';
import styled from 'styled-components';
import { ColorHelper } from '~/utils';

const Logo = styled.img`
  height: 75px;
  width: 75px;
`

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${ColorHelper.Colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin-right: 20px;
  font-size: 1rem;
  color: #333;
  text-decoration: none;

  &:hover {
    color: ${ColorHelper.Colors.celadon};
  }
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: ${ColorHelper.Colors.blue};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color:${ColorHelper.Colors.celadon};
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo
        src={fishOutline}
      />
      <NavLinks>
        <NavLink href="/about">Sobre nosotros</NavLink>
        <NavLink href="/events">Eventos</NavLink>
        <LoginButton>Entrar</LoginButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
