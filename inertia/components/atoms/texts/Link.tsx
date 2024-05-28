import { FontSizes, FontWeights } from '~/styles/default'
import { TextBaseType } from '~/types/style.types'
import BaseText from './BaseText'

export const Link = (props: TextBaseType) => (
  <BaseText
    {...props}
    as={props.as || 'a'}
    cursor={props.cursor || 'pointer'}
    fontSize={props.fontSize ? FontSizes[props.fontSize] || props.fontSize : FontSizes['2']}
    fontWeight={
      props.fontWeight ? FontWeights[props.fontWeight] || props.fontWeight : FontWeights.regular
    }
  >
    {props.children}
  </BaseText>
)

export default Link
