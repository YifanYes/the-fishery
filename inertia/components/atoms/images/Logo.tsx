import { fishOutline } from 'ionicons/icons'
import styled from 'styled-components'
import { ThemeHelper } from '~/utils'

const Element = styled.img`
  ${ThemeHelper.size('5rem')}
`

const Logo = () => {
  return <Element src={fishOutline} />
}

export default Logo
