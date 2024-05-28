import styled from 'styled-components'
import { FontSizes, FontWeights } from '~/styles/default'
import { TextBaseType } from '~/types/style.types'
import BaseText from './BaseText'

const ListItem = styled(BaseText)`
  margin-left: 1rem;
  list-style: inside;
`

export const List = (props: TextBaseType) => (
  <BaseText {...props} as={props.as || 'ul'}>
    {props.children}
    {props.list?.map((elem, index) => (
      <ListItem
        {...props}
        key={index}
        as="li"
        fontSize={props.fontSize ? FontSizes[props.fontSize] || props.fontSize : FontSizes['1']}
        fontWeight={
          props.fontWeight ? FontWeights[props.fontWeight] || props.fontWeight : FontWeights.regular
        }
      >
        {elem}
      </ListItem>
    ))}
  </BaseText>
)
