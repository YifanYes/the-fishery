import { FontSizes, FontWeights } from '~/styles/default'
import { TextBaseType } from '~/types/style.types'
import BaseText from './BaseText'

export const Text = (props: TextBaseType) => (
  <BaseText
    {...props}
    as={props.as || 'p'}
    fontSize={props.fontSize ? FontSizes[props.fontSize] || props.fontSize : FontSizes['2']}
    fontWeight={
      props.fontWeight ? FontWeights[props.fontWeight] || props.fontWeight : FontWeights.regular
    }
  >
    {props.children}
  </BaseText>
)

export default Text
