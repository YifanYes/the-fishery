import {
  AlignmentTypeObject,
  AppearanceObject,
  BorderRadiusObject,
  CursorObject,
  DeviceElement,
  FlexDirectionObject,
  FlexDisplayObject,
  FlexWrapObject,
  FontWeightObject,
  GridDisplayObject,
  GridFlowObject,
  JustifyTypeObject,
  ShadowObject,
  StyleObject,
  WindowBreakpointObject,
} from '~/types/style.types'

export const FontSizes: StyleObject = {
  '1': '12px',
  '2': '14px',
  '3': '16px',
  '4': '18px',
  '5': '20px',
  '6': '24px',
  '7': '28px',
  '8': '35px',
  '9': '60px',
}

export const FontWeights: FontWeightObject = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
}

export const Spacing: StyleObject = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '40px',
  8: '48px',
  9: '64px',
}

export const Shadows: ShadowObject = {
  inset: `inset 0 0 0 1px var(--gray-a5),
    inset 0 1.5px 2px 0 var(--gray-a2),
    inset 0 1.5px 2px 0 var(--black-a2);`,
  small: `0 0 0 1px var(--gray-a3),
    0 0 0 0.5px var(--black-a1),
    0 1px 1px 0 var(--gray-a2),
    0 2px 1px -1px var(--black-a1),
    0 1px 3px 0 var(--black-a1);`,
  normal: `0 0 0 1px var(--gray-a3),
    0 2px 3px -2px var(--gray-a3),
    0 3px 12px -4px var(--black-a2),
    0 4px 16px -8px var(--black-a2);`,
  medium: `0 0 0 1px var(--gray-a3),
    0 8px 40px var(--black-a1),
    0 12px 32px -16px var(--gray-a3);`,
  large: `0 0 0 1px var(--gray-a3),
    0 12px 60px var(--black-a3),
    0 12px 32px -16px var(--gray-a5);`,
  wide: `0 0 0 1px var(--gray-a3),
    0 12px 60px var(--black-a3),
    0 16px 64px var(--gray-a2),
    0 16px 36px -20px var(--gray-a7);`,
}

export const BorderRadius: BorderRadiusObject = {
  none: '0',
  small: '0.25rem',
  medium: '0.5rem',
  large: '1rem',
  full: '50%',
}

export const Devices: DeviceElement[] = ['xs', 'sm', 'md', 'lg', 'xl']

export const Appearance: AppearanceObject = {
  default: 'default',
  dark: 'dark',
  light: 'light',
}

export const WindowBreakpoints: WindowBreakpointObject = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const Cursors: CursorObject = {
  default: 'default',
  button: 'pointer',
  checkbox: 'pointer',
  normal: 'default',
  disabled: 'default',
  link: 'pointer',
  radio: 'pointer',
  slider: 'grab',
  switch: 'pointer',
}

export const FlexDisplay: FlexDisplayObject = {
  hidden: 'hidden',
  inline_flex: 'inline-flex',
  flex: 'flex',
}

export const FlexDirection: FlexDirectionObject = {
  row_reverse: 'row-reverse',
  column_reverse: 'column-reverse',
  column: 'column',
  row: 'row',
}

export const AlignmentType: AlignmentTypeObject = {
  start: 'start',
  flex_start: 'flex-start',
  center: 'center',
  end: 'end',
  flex_end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
}

export const JustifyType: JustifyTypeObject = {
  normal: 'normal',
  start: 'start',
  center: 'center',
  end: 'end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  stretch: 'stretch',
}

export const FlexWrap: FlexWrapObject = {
  no_wrap: 'nowrap',
  wrap: 'wrap',
  wrap_reverse: 'wrap-reverse',
}

export const GridDisplay: GridDisplayObject = {
  hidden: 'hidden',
  inline_grid: 'inline-grid',
  grid: 'grid',
}

export const GridFlow: GridFlowObject = {
  row: 'row',
  column: 'column',
  dense: 'dense',
  row_dense: 'row dense',
  column_dense: 'column dense',
}
