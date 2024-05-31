import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '~/context/ThemeContext'
import { ColorHelper, ThemeHelper } from '~/utils'
import { Button, Flex, Link, Logo } from '../atoms'

const NavbarContainer = styled(Flex)`
  padding: 0.5rem 1.5rem;
  background-color: ${ColorHelper.Colors.white};
  box-shadow: ${ThemeHelper.boxShadow};
`

const Navbar = () => {
  const { fontSizes } = useContext(ThemeContext)
  return (
    <NavbarContainer direction="row" align="center" justify="space-between">
      <Logo />
      <Flex direction="row" align="center" gap="2.5rem">
        <Link href="/about" color={ColorHelper.Colors.onyx} fontSize={fontSizes['3']}>
          Sobre nosotros
        </Link>
        <Link href="/events" color={ColorHelper.Colors.onyx} fontSize={fontSizes['3']}>
          Eventos
        </Link>
        <Button color="primary">Entrar</Button>
      </Flex>
    </NavbarContainer>
  )
}

export default Navbar
