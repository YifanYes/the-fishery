import styled from 'styled-components'
import { ThemeHelper } from '~/utils'

export type ImageProps = {
  width?: string
  height?: string
} & React.ComponentProps<'img'>

const Element = styled.img<ImageProps>`
  ${({ width, height }) => ThemeHelper.size(width || height || '100%', height || width || 'auto')}
  ${({ color }) => color && `color: ${color};`}
`

const Image = (props: ImageProps) => {
  return <Element {...props} />
}

export default Image
