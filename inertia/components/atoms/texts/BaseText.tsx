import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '~/context/ThemeContext'
import { Cursors, FontSizes, FontWeights } from '~/styles/default'
import { TextBaseType } from '~/types/style.types'
import { ColorHelper, ThemeHelper } from '~/utils'

const Text = styled.div<{
  cursor: string
  fontSize: string
  fontWeight: string
  size: { width: string; height: string } | string
  color: string
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
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

const BaseText = (props: TextBaseType) => {
  const { fontSizes = {}, fontWeights = {}, cursors = {} } = useContext(ThemeContext)
  return (
    <Text
      {...props}
      as={props.as}
      className={props.className}
      cursor={props.cursor ? cursors[props.cursor] : Cursors.default}
      size={props.size || 'fit-content'}
      color={props.color || ColorHelper.Colors.primary}
      fontWeight={props.fontWeight ? fontWeights[props.fontWeight] : FontWeights.regular}
      fontSize={props.fontSize ? fontSizes[props.fontSize] : FontSizes['1']}
    >
      {props.children}
    </Text>
  )
}

export default BaseText
