import { useContext } from 'react'
import styled from 'styled-components'
import { Button, Flex, Link, Logo } from '~/components/atoms'
import { ThemeContext } from '~/context/ThemeContext'
import { ColorHelper } from '~/utils'

const NavbarContainer = styled(Flex)`
  width: -webkit-fill-available;
  padding: 0.25rem 1.5rem;
  background-color: ${ColorHelper.Colors.white};
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
