import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '~/context/ThemeContext'
import { AlignmentType, FlexDirection, FlexDisplay, FlexWrap, JustifyType } from '~/styles/default'
import {
  AlignmentTypeElement,
  FlexDirectionElement,
  FlexDisplayElement,
  FlexWrapElement,
  JustifyTypeElement,
} from '~/types/style.types'

const FlexBase = styled.div<{
  display: string
  direction: string
  align: string
  justify: string
  wrap: string
  gap?: string
}>`
  display: ${({ display }) => display};
  flex-direction: ${({ direction }: any) => direction};
  align-items: ${({ align }: any) => align};
  justify-content: ${({ justify }: any) => justify};
  flex-wrap: ${({ wrap }: any) => wrap};
  ${({ gap }) => gap && `gap: ${gap};`}
`

const Flex = ({
  as,
  className,
  style,
  display = FlexDisplay.flex,
  direction = FlexDirection.row,
  align = AlignmentType.flex_start,
  justify = JustifyType.start,
  wrap = FlexWrap.wrap,
  gap,
  children,
}: {
  as?: string
  className?: string
  style?: { [key: string]: any }
  display?: FlexDisplayElement
  direction?: FlexDirectionElement
  align?: AlignmentTypeElement
  justify?: JustifyTypeElement
  wrap?: FlexWrapElement
  gap?: string
  children?: any
}) => {
  const { otherStyles } = useContext(ThemeContext)

  return (
    <FlexBase
      {...(as ? { as } : {})}
      className={className}
      display={otherStyles.flex[display] || display}
      direction={otherStyles.flexDirection[direction] || direction}
      wrap={otherStyles.flexWrap[wrap] || wrap}
      align={otherStyles.alignment[align] || align}
      justify={otherStyles.justify[justify] || justify}
      gap={gap}
      style={style}
    >
      {children}
    </FlexBase>
  )
}

export default Flex
