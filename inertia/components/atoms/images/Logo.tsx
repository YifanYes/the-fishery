import styled from 'styled-components'
import { ThemeHelper } from '~/utils'

const Element = styled.img`
  ${ThemeHelper.size('6rem', 'auto')}
  padding: 1rem;
`

const Logo = () => {
  return <Element src="/images/logo.webp" />
}

export default Logo
