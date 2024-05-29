import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '~/context/ThemeContext'
import { Cursors, FontSizes, FontWeights } from '~/styles/default'
import { CursorElement, FontWeightElement } from '~/types/style.types'
import { ColorHelper, ThemeHelper } from '~/utils'

const Text = styled.div<{
  cursor: string
  fontSize: string
  fontWeight: string
  size: { width: string; height: string } | string
  color: string
}>`
  ${({ cursor }) => `cursor: ${cursor};`};
  ${({ color }) => `color: ${color};`};
  ${({ fontWeight }: any) => ThemeHelper.fontFamily(fontWeight)}
  ${({ fontSize }: any) => ThemeHelper.fontSize(fontSize)} 
  ${({ size }: any) => {
    if (typeof size === 'string') {
      return ThemeHelper.size(size)
    }
    return ThemeHelper.size(size.width, size.height)
  }}
`

const BaseText = ({
  as,
  className,
  cursor = Cursors.default,
  size = 'fit-content',
  color = ColorHelper.Colors.primary,
  fontSize = FontSizes['1'],
  fontWeight = FontWeights.regular,
  children,
}: {
  as?: string
  className?: string
  cursor?: CursorElement
  size?: { width: string; height: string } | string
  color?: string
  fontSize?: string
  fontWeight?: FontWeightElement
  children?: any
}) => {
  const { fontSizes = {}, fontWeights = {}, cursors = {} } = useContext(ThemeContext)
  return (
    <Text
      as={as}
      className={className}
      cursor={cursors[cursor] || cursor}
      size={size}
      color={color}
      fontWeight={fontWeights[fontWeight] || fontWeight}
      fontSize={fontSizes[fontSize] || fontSize}
    >
      {children}
    </Text>
  )
}

export default BaseText
