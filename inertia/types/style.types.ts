const breakpoints = ['initial', 'xs', 'sm', 'md', 'lg', 'xl'] as const
type Breakpoint = (typeof breakpoints)[number]
type Responsive<T> = T | Partial<Record<Breakpoint, T>>

export type StringLike = Responsive<string> | string

export type TextBaseType = {
  as?: string
  className?: string
  level?: number
  cursor?: string
  size?: { width: string; height: string } | string
  color?: string
  fontSize?: string
  fontWeight?: string
  list?: string[]
  children?: any
}

export type FlexDisplayElement = 'hidden' | 'inline_flex' | 'flex' | string

export type FlexDirectionElement = 'row_reverse' | 'column_reverse' | 'column' | 'row' | string

export type AlignmentTypeElement =
  | 'start'
  | 'flex-start'
  | 'center'
  | 'end'
  | 'flex-end'
  | 'stretch'
  | 'baseline'
  | string

export type JustifyTypeElement =
  | 'normal'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | string

export type FlexWrapElement = 'no_wrap' | 'wrap' | 'wrap_reverse' | string

export type GridDisplayElement = 'hidden' | 'inline_grid' | 'grid' | string

export type GridFlowElement = 'row' | 'column' | 'dense' | 'row_dense' | 'column_dense' | string

export type BoxElement = 'div' | 'span' | string

export type ColorObject = { [key: string]: string }

export type AppearanceElement = 'default' | 'dark' | 'light' | string

export type StyleElement = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | string

export type FontWeightElement = 'light' | 'regular' | 'medium' | 'semibold' | string

export type CursorElement =
  | 'default'
  | 'button'
  | 'checkbox'
  | 'normal'
  | 'disabled'
  | 'link'
  | 'radio'
  | 'slider'
  | 'switch'
  | string

export type DeviceElement = 'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string

export type FlexDisplayObject = { [key: FlexDisplayElement]: string }

export type FlexDirectionObject = { [key: FlexDirectionElement]: string }

export type AlignmentTypeObject = { [key: AlignmentTypeElement]: string }

export type JustifyTypeObject = { [key: JustifyTypeElement]: string }

export type FlexWrapObject = { [key: FlexWrapElement]: string }

export type GridDisplayObject = { [key: GridDisplayElement]: string }

export type GridFlowObject = { [key: GridFlowElement]: string }

export type BoxObject = { [key: BoxElement]: string }

export type AppearanceObject = { [key: AppearanceElement]: string }

export type WindowBreakpointObject = { [key: DeviceElement]: number }

export type CursorObject = { [key: CursorElement]: string }

export type FontWeightObject = { [key: FontWeightElement]: string }

export type FontSizesObject = { [key: StyleElement]: string }

export type StyleObject = { [key: StyleElement]: string }

export type ShadowObject = {
  inset: string
  small: string
  normal: string
  medium: string
  large: string
  wide: string
}

export type BorderRadiusObject = {
  none: string
  small: string
  medium: string
  large: string
  full: string
}

export type OtherStylesObject = {
  flex: FlexDisplayObject
  flexDirection: FlexDirectionObject
  flexWrap: FlexWrapObject
  grid: GridDisplayObject
  gridFlow: GridFlowObject
  alignment: AlignmentTypeObject
  justify: JustifyTypeObject
}

export type MainStyleThemeObject = {
  colors: ColorObject
  currentAppearance: AppearanceElement
  appearance: AppearanceObject
  fontSizes: StyleObject
  fontWeights: FontWeightObject
  spacing: StyleObject
  shadows: ShadowObject
  cursors: CursorObject
  borderRadius: BorderRadiusObject
  devices: DeviceElement[]
  windowBreakpoints: WindowBreakpointObject
  otherStyles: OtherStylesObject
}
