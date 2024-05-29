import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '~/context/ThemeContext'
import { AlignmentType, GridDisplay, GridFlow, JustifyType } from '~/styles/default'
import {
  AlignmentTypeElement,
  GridDisplayElement,
  GridFlowElement,
  JustifyTypeElement,
} from '~/types/style.types'

const GridBase = styled.div<{
  display: string
  flow: string
  align: string
  justify: string
  columns?: string
  rows?: string
  gap?: string
}>`
  ${({ columns }) => {
    if (!columns) {
      return ''
    }
    if (isNaN(parseInt(columns))) {
      return `grid-template-columns: repeat(${columns}, minmax(0, 1fr));`
    }

    return `grid-template-columns: ${columns};`
  }};

  ${({ rows }) => {
    if (!rows) {
      return ''
    }
    if (isNaN(parseInt(rows))) {
      return `grid-template-rows: repeat(${rows}, minmax(0, 1fr));`
    }

    return `grid-template-rows: ${rows};`
  }};
  display: ${({ display }) => display};
  grid-auto-flow: ${({ flow }: any) => flow};
  align-items: ${({ align }: any) => align};
  justify-content: ${({ justify }: any) => justify};
  ${({ gap }) => `grid-gap: ${gap};`}
`

const Grid = ({
  className,
  style,
  display = GridDisplay.grid,
  flow = GridFlow.row,
  align = AlignmentType.start,
  justify = JustifyType.start,
  columns,
  rows,
  gap,
  children,
}: {
  className?: string
  style?: { [key: string]: any }
  display?: GridDisplayElement
  flow?: GridFlowElement
  align?: AlignmentTypeElement
  justify?: JustifyTypeElement
  columns?: string
  rows?: string
  gap?: string
  children?: any
}) => {
  const { otherStyles } = useContext(ThemeContext)

  return (
    <GridBase
      className={className}
      style={style}
      display={otherStyles.grid[display] || display}
      flow={otherStyles.gridFlow[flow] || flow}
      align={otherStyles.alignment[align] || align}
      justify={otherStyles.justify[justify] || justify}
      columns={columns}
      rows={rows}
      gap={gap}
    >
      {children}
    </GridBase>
  )
}

export default Grid
