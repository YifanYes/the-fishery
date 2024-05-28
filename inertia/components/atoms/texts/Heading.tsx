import { FontSizes, FontWeights } from '~/styles/default'
import { TextBaseType } from '~/types/style.types'
import BaseText from './BaseText'

export const Heading = (props: TextBaseType) => (
  <BaseText
    {...props}
    as={props.as || `h${props.level || 2}`}
    fontSize={props.fontSize ? FontSizes[props.fontSize] || props.fontSize : FontSizes['8']}
    fontWeight={
      props.fontWeight ? FontWeights[props.fontWeight] || props.fontWeight : FontWeights.semibold
    }
  >
    {props.children}
  </BaseText>
)
